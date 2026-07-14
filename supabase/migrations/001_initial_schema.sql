-- =====================================================
-- EduConecta - Schema Inicial
-- Sistema Educativo Nacional del Peru
-- =====================================================

-- Extensiones
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- =====================================================
-- TABLAS
-- =====================================================

-- Escuelas / Instituciones Educativas
CREATE TABLE schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  type TEXT CHECK (type IN ('estatal', 'privado', 'convenio')) NOT NULL,
  region TEXT NOT NULL,
  province TEXT NOT NULL,
  district TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  email TEXT,
  logo_url TEXT,
  is_active BOOLEAN DEFAULT true,
  config JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Perfiles de usuario (extiende auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  school_id UUID REFERENCES schools(id) ON DELETE SET NULL,
  role TEXT CHECK (role IN ('dev','director','secretaria','docente','alumno','padre')) NOT NULL DEFAULT 'alumno',
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  dni TEXT UNIQUE NOT NULL,
  phone TEXT,
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT true,
  onboarding_completed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Docentes
CREATE TABLE teachers (
  id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  specialization TEXT,
  employment_type TEXT CHECK (employment_type IN ('nombrado','contratado','CAS')),
  hire_date DATE,
  scale_level INTEGER,
  subjects TEXT[] DEFAULT '{}',
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Alumnos
CREATE TABLE students (
  id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  enrollment_date DATE DEFAULT CURRENT_DATE,
  grade TEXT NOT NULL,
  section TEXT NOT NULL,
  academic_year INTEGER NOT NULL,
  status TEXT CHECK (status IN ('activo','egresado','retirado','trasladado')) DEFAULT 'activo',
  medical_notes TEXT,
  emergency_contact TEXT,
  emergency_phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Padres de Familia
CREATE TABLE parents (
  id UUID PRIMARY KEY REFERENCES profiles(id) ON DELETE CASCADE,
  occupation TEXT,
  relationship TEXT CHECK (relationship IN ('padre','madre','tutor','apoderado')) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Relacion Padre-Hijo
CREATE TABLE parent_student (
  parent_id UUID REFERENCES parents(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (parent_id, student_id)
);

-- Aulas / Secciones
CREATE TABLE classrooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  grade TEXT NOT NULL,
  section TEXT NOT NULL,
  academic_year INTEGER NOT NULL,
  capacity INTEGER DEFAULT 40,
  tutor_id UUID REFERENCES teachers(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(school_id, grade, section, academic_year)
);

-- Asignacion Docente -> Aula -> Materia
CREATE TABLE teacher_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id UUID REFERENCES teachers(id) ON DELETE CASCADE,
  classroom_id UUID REFERENCES classrooms(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  academic_year INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(teacher_id, classroom_id, subject, academic_year)
);

-- Asistencia
CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  classroom_id UUID REFERENCES classrooms(id) ON DELETE SET NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  status TEXT CHECK (status IN ('presente','ausente','tardanza','justificado')) NOT NULL,
  notes TEXT,
  recorded_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(student_id, date)
);

-- Calificaciones
CREATE TABLE grades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES teachers(id) ON DELETE SET NULL,
  classroom_id UUID REFERENCES classrooms(id) ON DELETE SET NULL,
  subject TEXT NOT NULL,
  period TEXT CHECK (period IN ('I','II','III','IV')) NOT NULL,
  score DECIMAL(4,1) CHECK (score >= 0 AND score <= 20),
  comments TEXT,
  academic_year INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tareas
CREATE TABLE assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  classroom_id UUID REFERENCES classrooms(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES teachers(id) ON DELETE SET NULL,
  subject TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  due_date TIMESTAMPTZ,
  max_score DECIMAL(4,1) DEFAULT 20,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Entregas de tareas
CREATE TABLE assignment_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id UUID REFERENCES assignments(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  file_url TEXT,
  score DECIMAL(4,1),
  comments TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  graded_at TIMESTAMPTZ,
  UNIQUE(assignment_id, student_id)
);

-- Comunicados
CREATE TABLE announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  author_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  target_roles TEXT[] DEFAULT '{all}',
  priority TEXT CHECK (priority IN ('baja','normal','alta','urgente')) DEFAULT 'normal',
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pagos (para privados)
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  concept TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  due_date DATE NOT NULL,
  paid_date DATE,
  status TEXT CHECK (status IN ('pendiente','pagado','vencido','cancelado')) DEFAULT 'pendiente',
  receipt_url TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Logs de actividad
CREATE TABLE activity_logs (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  school_id UUID REFERENCES schools(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT,
  entity_id TEXT,
  details JSONB,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Configuracion del sistema
CREATE TABLE system_config (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  description TEXT,
  updated_by UUID REFERENCES profiles(id),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- INDICES
-- =====================================================

CREATE INDEX idx_profiles_school_id ON profiles(school_id);
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_students_classroom ON students(grade, section, academic_year);
CREATE INDEX idx_students_school ON students(id) WHERE status = 'activo';
CREATE INDEX idx_attendance_date ON attendance(date);
CREATE INDEX idx_grades_student ON grades(student_id, academic_year);
CREATE INDEX idx_activity_logs_created ON activity_logs(created_at DESC);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_announcements_school ON announcements(school_id, published);

-- =====================================================
-- FUNCIONES RPC
-- =====================================================

-- Obtener rol del usuario
CREATE OR REPLACE FUNCTION get_user_role(user_id UUID)
RETURNS TEXT LANGUAGE sql STABLE AS $$
  SELECT role FROM profiles WHERE id = user_id;
$$;

-- Verificar si usuario tiene permiso
CREATE OR REPLACE FUNCTION has_permission(
  user_role TEXT,
  required_role TEXT
) RETURNS BOOLEAN LANGUAGE plpgsql STABLE AS $$
BEGIN
  IF user_role = 'dev' THEN RETURN TRUE; END IF;
  RETURN user_role = required_role;
END;
$$;

-- =====================================================
-- TRIGGERS
-- =====================================================

-- Actualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_schools_updated_at
  BEFORE UPDATE ON schools
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_grades_updated_at
  BEFORE UPDATE ON grades
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Trigger: registrar actividad al crear usuario
CREATE OR REPLACE FUNCTION log_user_activity()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  INSERT INTO activity_logs (user_id, school_id, action, entity_type, entity_id, details)
  VALUES (NEW.id, NEW.school_id, 'user.created', 'profile', NEW.id::text,
    jsonb_build_object('role', NEW.role, 'name', NEW.first_name || ' ' || NEW.last_name));
  RETURN NEW;
END;
$$;

-- Solo si se configura despues
-- CREATE TRIGGER on_profile_created
--   AFTER INSERT ON profiles
--   FOR EACH ROW EXECUTE FUNCTION log_user_activity();

-- =====================================================
-- ROW LEVEL SECURITY
-- =====================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE parents ENABLE ROW LEVEL SECURITY;
ALTER TABLE schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE classrooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE grades ENABLE ROW LEVEL SECURITY;
ALTER TABLE assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_config ENABLE ROW LEVEL SECURITY;

-- Dev: acceso total
CREATE POLICY dev_all ON profiles FOR ALL USING (
  auth.uid() IN (SELECT id FROM profiles WHERE role = 'dev')
);
CREATE POLICY dev_all_schools ON schools FOR ALL USING (
  auth.uid() IN (SELECT id FROM profiles WHERE role = 'dev')
);
CREATE POLICY dev_all_attendance ON attendance FOR ALL USING (
  auth.uid() IN (SELECT id FROM profiles WHERE role = 'dev')
);
CREATE POLICY dev_all_grades ON grades FOR ALL USING (
  auth.uid() IN (SELECT id FROM profiles WHERE role = 'dev')
);

-- Aislamiento por escuela
CREATE POLICY school_isolation ON profiles FOR ALL USING (
  school_id = (SELECT school_id FROM profiles WHERE id = auth.uid())
  OR auth.uid() IN (SELECT id FROM profiles WHERE role = 'dev')
);

CREATE POLICY school_isolation_students ON students FOR ALL USING (
  id IN (SELECT id FROM profiles WHERE school_id = (SELECT school_id FROM profiles WHERE id = auth.uid()))
  OR auth.uid() IN (SELECT id FROM profiles WHERE role = 'dev')
);

CREATE POLICY school_isolation_classrooms ON classrooms FOR ALL USING (
  school_id = (SELECT school_id FROM profiles WHERE id = auth.uid())
  OR auth.uid() IN (SELECT id FROM profiles WHERE role = 'dev')
);

-- Padres: solo ven a sus hijos
CREATE POLICY parent_select_students ON students FOR SELECT USING (
  id IN (SELECT student_id FROM parent_student WHERE parent_id = auth.uid())
  OR auth.uid() IN (SELECT id FROM profiles WHERE role IN ('dev','secretaria','director','docente'))
);

CREATE POLICY parent_select_grades ON grades FOR SELECT USING (
  student_id IN (SELECT student_id FROM parent_student WHERE parent_id = auth.uid())
  OR auth.uid() IN (SELECT id FROM profiles WHERE role IN ('dev','secretaria','director','docente'))
);

-- Docentes: solo sus aulas
CREATE POLICY teacher_attendance ON attendance FOR SELECT USING (
  classroom_id IN (SELECT classroom_id FROM teacher_assignments WHERE teacher_id = auth.uid())
  OR auth.uid() IN (SELECT id FROM profiles WHERE role IN ('dev','secretaria','director'))
);

CREATE POLICY teacher_grades ON grades FOR ALL USING (
  teacher_id = auth.uid()
  OR auth.uid() IN (SELECT id FROM profiles WHERE role IN ('dev','secretaria','director'))
);

-- Alumnos: solo sus datos
CREATE POLICY student_self ON grades FOR SELECT USING (
  student_id = auth.uid()
);
CREATE POLICY student_self_attendance ON attendance FOR SELECT USING (
  student_id = auth.uid()
);

-- Secretaria: gestiona su escuela
CREATE POLICY secretaria_manage_students ON students FOR INSERT WITH CHECK (
  auth.uid() IN (SELECT id FROM profiles WHERE role IN ('secretaria','director','dev'))
);
CREATE POLICY secretaria_update_students ON students FOR UPDATE USING (
  auth.uid() IN (SELECT id FROM profiles WHERE role IN ('secretaria','director','dev'))
);

-- =====================================================
-- CONFIGURACION INICIAL
-- =====================================================

INSERT INTO system_config (key, value, description) VALUES
  ('system_name', '"EduConecta"', 'Nombre del sistema'),
  ('system_version', '"1.0.0"', 'Version del sistema'),
  ('academic_year', '2026', 'Anio academico actual'),
  ('max_score', '20', 'Nota maxima en el sistema'),
  ('min_score', '0', 'Nota minima en el sistema'),
  ('passing_score', '11', 'Nota minima aprobatoria'),
  ('academic_periods', '["I","II","III","IV"]', 'Periodos academicos')
ON CONFLICT (key) DO NOTHING;
