# 태스크 시스템 구축 가이드

이 문서는 프로젝트의 체계적인 태스크 관리와 협업을 위해 `@/task` 폴더에 태스크 정의 파일을 생성하는 방법과 규칙을 안내합니다.

## 1. 폴더 및 파일 구조

- **모든 태스크 관련 파일은 반드시 `@/task` 폴더에 생성합니다.**
- 전체 프로젝트의 개요와 페이즈별 태스크 파일명을 관리하는 `task.json`을 최상위로 둡니다.
- **세부 태스크 파일은 반드시 `task-phase1.json`부터 시작하며, 프로젝트가 짧거나 소규모라면 `task-phase1.json` 하나만 있어도 무방합니다.**
- 개발 기간이 길거나 단계가 많을 경우 `task-phase2.json`, `task-phase3.json` 등으로 확장할 수 있습니다.

```
@/task/
  ├─ task.json                # 전체 태스크 구조 및 페이즈별 파일명, 진행상황, 규칙 등
  ├─ task-phase1.json         # Phase 1 세부 태스크 (필수)
  ├─ task-phase2.json         # Phase 2 세부 태스크 (선택)
  ├─ task-phase3.json         # Phase 3 세부 태스크 (선택)
  └─ ... (필요시 phase4, phase5 등 추가)
```

## 2. `task.json` 작성 규칙

- 프로젝트 전체 개요, 페이즈 구분, 각 페이즈별 태스크 파일명, 기술스택, 개발 규칙, 주요 개선점, 진행상황 등을 포함합니다.
- 각 페이즈별로 담당 영역, 기간, 목표, 태스크 수, 파일명을 명확히 기재합니다.
- **최소한 phase1(즉, `task-phase1.json`)은 반드시 존재해야 하며, 프로젝트가 간단하다면 phase1만으로도 충분합니다.**
- 예시 구조:

```json
{
  "projectInfo": {
    "name": "프로젝트명",
    "description": "간단한 설명",
    "currentProgress": "25%",
    "targetProgress": "75%",
    "developmentPeriod": "3주 (21일)",
    "lastUpdated": "YYYY-MM-DD",
    "framework": "React Router v7",
    ...
  },
  "developmentPhases": {
    "phase1": {
      "title": "핵심 기능",
      "days": "1-7일",
      "focus": "대시보드, 관리 시스템 등",
      "target": "핵심 시스템 구축",
      "taskCount": 27,
      "file": "task-phase1.json"
    },
    ...
  },
  "currentStatus": {
    "completed": ["..."],
    "inProgress": ["..."],
    "pending": ["..."]
  },
  "technicalStack": ["React", "TypeScript", ...],
  "dataFetchingPattern": { ... },
  "developmentRules": ["..."],
  "summary": { ... }
}
```

## 3. 페이즈별 태스크 파일(`task-phaseX.json`) 작성 규칙

- **세부 태스크 파일은 반드시 `task-phase1.json`부터 시작합니다.**
- 각 페이즈별로 세부 태스크를 배열로 정의합니다.
- 프로젝트가 짧거나 소규모라면 phase1만 작성해도 무방합니다.
- 각 태스크는 다음 정보를 포함해야 합니다:

  - `id`: 고유 태스크 식별자 (예: `task-001-1`)
  - `title`: 태스크 제목
  - `priority`: 우선순위 (최우선/높음/중간/낮음 등)
  - `estimatedDays`: 예상 소요일
  - `phase`: 페이즈 번호
  - `status`: 상태 (pending/inProgress/completed 등)
  - `dependencies`: 선행 태스크 ID 배열
  - `description`: 태스크 상세 설명
  - `tableReferences`: 관련 DB 테이블명 배열
  - `files`: 작업 대상 파일 경로, 작업 종류(create/modify 등), 설명
  - `implementation`: 주요 구현 포인트(기능, props, API 등)
  - `checklist`: 세부 구현 체크리스트

- 예시:

```json
{
  "id": "task-001-1",
  "title": "DataTable 컴포넌트 구현",
  "priority": "최우선",
  "estimatedDays": 0.5,
  "phase": 1,
  "status": "pending",
  "dependencies": [],
  "description": "정렬, 필터링, 체크박스 선택이 가능한 재사용 가능한 데이터 테이블 컴포넌트",
  "tableReferences": [],
  "files": [
    { "path": "app/_components/common/DataTable.tsx", "action": "create", "description": "메인 DataTable 컴포넌트" },
    { "path": "app/_components/common/data-table.types.ts", "action": "create", "description": "DataTable 타입 정의" }
  ],
  "implementation": {
    "features": ["정렬", "필터링", "체크박스 선택", ...],
    "props": ["columns: ColumnDef[]", "data: any[]", ...],
    "styling": "cva 구조, 각진 모서리 디자인"
  },
  "checklist": [
    "ColumnDef 인터페이스 정의",
    "DataTable 컴포넌트 생성 (cva 구조)",
    ...
  ]
}
```

## 4. 작성 및 관리 팁

- **모든 태스크 파일은 반드시 `@/task` 폴더에 위치해야 하며, 세부 태스크 파일은 1번부터 시작해야 합니다.**
- 태스크 ID는 일관된 규칙(예: `task-001-1`, `task-002-3` 등)으로 부여합니다.
- 각 태스크의 `files` 항목에는 실제 작업할 파일 경로와 작업 종류를 명확히 기재합니다.
- `dependencies`를 활용해 선행/후행 관계를 명확히 합니다.
- 체크리스트는 실제 구현 단계에서 점검표로 활용합니다.
- 페이즈별로 파일을 분리하면 관리와 병렬 작업이 용이합니다.
- **프로젝트가 짧으면 phase1만으로도 충분하며, 반드시 1번부터 시작해야 합니다.**

## 5. 예시 파일 목록

- `@/task/task.json` : 전체 구조 및 페이즈별 파일명, 규칙, 진행상황 등
- `@/task/task-phase1.json` : Phase 1 세부 태스크 (필수)
- `@/task/task-phase2.json` : Phase 2 세부 태스크 (선택)
- `@/task/task-phase3.json` : Phase 3 세부 태스크 (선택)

## 6. 기타 권장 사항

- 프로젝트의 규모, 기간, 인원에 따라 페이즈와 태스크 수를 조정하세요.
- 태스크 파일은 Git 등 버전 관리 시스템에 반드시 포함하세요.
- 태스크 파일을 기반으로 자동화 도구, 대시보드, 체크리스트 등으로 확장할 수 있습니다.

---

이 가이드를 참고하여 어떤 프로젝트든 일관성 있고 체계적인 태스크 관리 시스템을 구축할 수 있습니다.
