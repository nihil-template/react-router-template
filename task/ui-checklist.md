# UI 개발 체크리스트 템플릿 (React Router v7 기준)

이 문서는 범용 웹 프로젝트(React Router v7 기반)의 UI 구현 항목을 체계적으로 관리하기 위한 템플릿입니다.

- 실제 프로젝트 구조와 React Router v7 파일 라우트 규칙을 따릅니다.
- 각 UI 항목별로 체크박스(✅/❌/📁 등)로 구현 현황을 관리할 수 있습니다.
- 도메인(메인/사용자/관리자/공통 등)별로 구분하여 작성하세요.
- 실제 구현이 완료되면 ✅, 파일만 있으면 📁, 미구현은 ❌ 등으로 표시합니다.

---

## 🏗️ 파일 구조 및 라우트 예시

```
app/
├── _routes/
│   ├── main.tsx                         # / (메인 페이지)
│   ├── dashboard.tsx                    # /dashboard (대시보드)
│   ├── users.tsx                        # /users (사용자 목록)
│   ├── ... (기타 라우트 파일)
├── _components/                         # UI 컴포넌트 폴더
│   ├── common/                          # 공통 컴포넌트
│   ├── user/                            # 사용자 관련 컴포넌트
│   ├── admin/                           # 관리자 전용 컴포넌트
│   └── ...
```

---

## 🗺️ URL 매핑 및 라우트 규칙

- 파일명과 URL이 1:1 매핑되도록 작성하세요.
- 동적 세그먼트($), 점(.)을 활용한 중첩 라우트 규칙을 따르세요.
- 예시: `users.$userId.profile.tsx` → `/users/:userId/profile`

---

## ✅ 체크리스트 작성 가이드

- 각 UI 항목별로 아래와 같이 체크박스를 사용해 구현 현황을 관리하세요.
- 예시:

  - [ ] 메인 페이지 (`app/_routes/main.tsx`)
  - [x] 로그인 폼 (`app/_components/user/LoginForm.tsx`)
  - [ ] 사용자 목록 테이블 (`app/_components/user/UserTable.tsx`)
  - [ ] 공통 DataTable 컴포넌트 (`app/_components/common/DataTable.tsx`)

- 실제 구현이 완료되면 `[x]`로 체크, 파일만 있으면 `[ ]` + 📁, 미구현은 `[ ]`로 남겨두세요.
- 각 항목 옆에 파일 경로를 명확히 표기하세요.
- 내부 컴포넌트/위젯/모달 등도 세부적으로 분리해 관리하세요.

---

## 🧩 도메인별 UI 체크리스트 예시

### 1. 메인(Main) UI

- [ ] 메인 페이지 (`app/_routes/main.tsx`)
- [ ] 대시보드 위젯 (`app/_components/common/DashboardWidget.tsx`)

### 2. 사용자(User) UI

- [ ] 사용자 목록 페이지 (`app/_routes/users.tsx`)
- [ ] 사용자 상세 페이지 (`app/_routes/users.$userId.tsx`)
- [ ] 사용자 프로필 카드 (`app/_components/user/UserProfileCard.tsx`)
- [ ] 로그인 폼 (`app/_components/user/LoginForm.tsx`)

### 3. 관리자(Admin) UI

- [ ] 관리자 대시보드 (`app/_routes/admin.tsx`)
- [ ] 관리자 목록 테이블 (`app/_components/admin/AdminTable.tsx`)

### 4. 공통(Common) UI

- [ ] 네비게이션 컴포넌트 (`app/_components/common/SiteNavigation.tsx`)
- [ ] 버튼 컴포넌트 (`app/_components/common/Button.tsx`)
- [ ] 카드 컴포넌트 (`app/_components/common/Card.tsx`)
- [ ] 데이터 테이블 컴포넌트 (`app/_components/common/DataTable.tsx`)
- [ ] 페이지네이션 컴포넌트 (`app/_components/common/Pagination.tsx`)
- [ ] 모달 컴포넌트 (`app/_components/common/Modal.tsx`)

---

## 📝 커스텀 체크리스트 추가 방법

- 프로젝트에 필요한 UI 항목을 자유롭게 추가/수정하세요.
- 도메인별, 기능별로 세분화하여 관리하면 개발 효율이 높아집니다.
- 각 항목은 실제 파일 경로와 함께 작성해 추적이 용이하도록 하세요.

---

## ⚠️ 템플릿 사용 시 주의사항

- 실제 프로젝트 현황(완료/미완료 등)은 템플릿에 포함하지 마세요.
- 체크리스트는 프로젝트 시작 시 복사하여 사용하고, 진행 상황에 따라 직접 체크하세요.
- 파일 경로, 컴포넌트 명명 규칙 등은 프로젝트 규칙에 맞게 수정하세요.

---

이 템플릿을 기반으로 UI 개발 체크리스트를 체계적으로 관리하세요.
