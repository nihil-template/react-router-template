# 프로젝트 템플릿 가이드 (범용)

이 템플릿은 React Router v7, TypeScript, Drizzle ORM, PostgreSQL, Tailwind CSS 기반의 **범용 웹 프로젝트**의 기본 구조와 개발 가이드를 제공합니다.

---

## 📖 프로젝트 개요

- **프로젝트명**: (예: my-app)
- **목적**: (예: 대시보드, 관리자, 커뮤니티, 커스텀 웹앱 등)
- **기술 스택**: React Router v7, TypeScript, Drizzle ORM, PostgreSQL, Tailwind CSS 등
- **아키텍처**: (예: SPA, SSR, 모노레포, 멀티 테넌트 등)

---

## 🏗️ 기반 구조 및 환경 설정

- **패키지 관리자**: pnpm
- **TypeScript/ESLint/Tailwind CSS**: 기본 설정 포함
- **폴더 구조**: entities, libs, routes, icons, styles, config, data 등
- **ORM/DB**: Drizzle ORM, PostgreSQL

---

## 🗄️ 데이터베이스

- **테이블 설계**: /app/\_entities/ 폴더 참고 (예: user, item, order 등)
- **마이그레이션**: /app/\_sql/migrations/ 폴더 참고
- **시드 데이터**: /app/\_data/ 폴더 참고 (샘플 데이터만 남기세요)

---

## 🔧 백엔드/API 개발

- **API 구조**: /app/\_entities/\*/api/ 폴더 참고
- **응답 표준화**: createResponse, createErrorResponse 유틸 사용
- **DB 접근**: /app/\_libs/db/ 참고

---

## 🎨 프론트엔드 개발

- **라우트 구조**: /app/\_routes/ 폴더 참고 (React Router v7 파일 기반)
- **UI 컴포넌트**: /app/\_components/ 폴더 참고 (Shadcn UI 기반)
- **상태 관리**: 필요에 따라 추가 (예: Zustand, Redux 등)
- **폼 처리**: React Hook Form + Zod 권장

---

## 🔐 인증 및 보안

- **인증 시스템**: 이메일/코드/패스워드/OTP 등 구현 예시 포함 가능
- **세션 관리**: 쿠키 기반 세션 스토리지
- **권한 관리**: RBAC 등 구조 참고

---

## 🚀 배포 및 운영

- **환경 분리**: 개발/운영 환경 구분
- **빌드/배포**: pnpm run build, pnpm run serve
- **CI/CD**: 필요시 추가

---

## 📝 프로젝트 시작 가이드

1. **패키지 설치**

   ```bash
   pnpm install
   ```

2. **환경 변수 설정**

   - .env 파일을 생성하고 필요한 값을 입력하세요.
   - 예시: DATABASE_URL 등

3. **DB 마이그레이션 적용**

   ```bash
   pnpm run db:migrate
   ```

4. **개발 서버 실행**

   ```bash
   pnpm run serve
   ```

5. **프로젝트 구조/코딩 규칙**

   - /app/\_config/ 폴더의 설정 파일 참고
   - /app/\_entities/ 폴더의 테이블/타입/스토어/훅 구조 참고
   - /app/\_routes/ 폴더의 라우트 파일명 규칙 참고
   - /app/\_components/ 폴더의 컴포넌트 구조 참고

---

## 📚 참고 문서 및 체크리스트

- /task/ 폴더의 체크리스트 및 개발 가이드 참고
- 주요 설정/구조/코딩 규칙은 /app/\_config/ 및 /app/\_libs/ 참고

---

## ⚠️ 템플릿 사용 시 주의사항

- 실제 서비스 정보, 비밀키, 운영 데이터는 반드시 제거 후 사용하세요.
- 샘플 데이터는 최소화하고, 프로젝트에 맞게 커스터마이즈하세요.
- README, site.config.ts 등 주요 설정 파일의 주석을 참고하여 항목을 채워넣으세요.

---

이 템플릿을 기반으로 새로운 프로젝트를 시작할 때, 위 가이드에 따라 각 항목을 채워넣고 구조를 확장해 주세요.
