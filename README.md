# 🎯 QR코드 생성기

> 간단하고 사용하기 쉬운 무료 QR코드 생성 웹 애플리케이션

<br>

## ✨ 주요 기능

- 📝 **텍스트/URL을 QR코드로 변환** - 어떤 텍스트나 링크든 QR코드로 만들 수 있어요
- 💾 **PNG 다운로드** - 생성된 QR코드를 이미지 파일로 저장
- 📱 **반응형 디자인** - 모바일과 데스크톱 모두 완벽 지원
- 🎨 **깔끔한 UI** - 직관적이고 보기 좋은 인터페이스

<br>

## 🚀 빠른 시작

### 로컬에서 실행하기
1. 프로젝트를 다운로드하세요
2. `index.html` 파일을 브라우저로 열면 바로 사용 가능합니다

### 사용 방법
1. 입력창에 텍스트나 URL을 입력하세요
2. **QR코드 생성** 버튼 클릭 (또는 Enter 키)
3. 생성된 QR코드를 확인하세요
4. **QR코드 다운로드** 버튼으로 이미지 저장

<br>

---

## 📦 GitHub Pages 배포하기

### 1단계: GitHub 저장소 생성
- GitHub에서 새 저장소(repository)를 만드세요

### 2단계: 코드 업로드
```bash
git init
git add .
git commit -m "feat: Add QR code generator"
git remote add origin https://github.com/사용자명/저장소명.git
git branch -M main
git push -u origin main
```

### 3단계: GitHub Pages 활성화
1. GitHub 저장소 페이지로 이동
2. **Settings** 탭 클릭
3. 좌측 메뉴에서 **Pages** 선택
4. **Source** 섹션에서:
   - Branch: `main` 선택
   - Folder: `/(root)` 선택
   - **Save** 버튼 클릭
5. 약 1-2분 후 `https://사용자명.github.io/저장소명/`에서 접속 가능

> ⚠️ **중요**: 배포 후 `robots.txt`와 `sitemap.xml`의 URL을 실제 주소로 수정하세요!

<br>

---

## 📊 Google Analytics 설정하기

### 왜 필요한가요?
방문자 수, 사용 패턴 등을 분석하여 서비스를 개선할 수 있습니다.

### 설정 방법

#### 1. Analytics 계정 만들기
1. [Google Analytics](https://analytics.google.com/)에 접속
2. **관리** → **속성 만들기** 클릭
3. 속성 이름과 웹사이트 정보 입력
4. **데이터 스트림 만들기** 클릭

#### 2. 측정 ID 받기
- 데이터 스트림을 생성하면 `G-XXXXXXXXXX` 형태의 **측정 ID**가 나옵니다
- 이 ID를 복사하세요

#### 3. 코드에 적용하기
`index.html` 파일을 열어서 다음 부분을 찾으세요:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');  ← 여기를 실제 ID로 변경
</script>
```

**예시:**
```html
gtag('config', 'G-ABC123DEF456');
```

#### 4. 배포하기
```bash
git add index.html
git commit -m "feat: Add Google Analytics tracking"
git push
```

<br>

---

## 🔍 Google Search Console 등록하기

### 왜 필요한가요?
Google 검색 결과에 사이트가 노출되도록 하고, 검색 성능을 모니터링할 수 있습니다.

### 설정 방법

#### 1. Search Console 접속
🔗 [Google Search Console](https://search.google.com/search-console) ← 이 사이트입니다!

#### 2. 속성 추가
1. **속성 추가** 버튼 클릭
2. **URL 접두어** 선택
3. GitHub Pages 주소 입력:
   ```
   https://사용자명.github.io/저장소명/
   ```

#### 3. 소유권 확인 (HTML 태그 방법 권장)

**방법 A: HTML 태그로 확인 (추천)**
1. Search Console에서 제공하는 메타 태그 복사:
   ```html
   <meta name="google-site-verification" content="여기에_코드" />
   ```
2. `index.html`의 `<head>` 섹션에 추가
3. Git에 커밋하고 푸시
4. Search Console에서 **확인** 버튼 클릭

**방법 B: HTML 파일로 확인**
1. 제공된 HTML 파일 다운로드
2. 프로젝트 루트에 추가
3. Git에 커밋하고 푸시
4. Search Console에서 **확인** 버튼 클릭

#### 4. Sitemap 제출
1. 좌측 메뉴에서 **Sitemaps** 클릭
2. 다음 주소 입력:
   ```
   https://사용자명.github.io/저장소명/sitemap.xml
   ```
3. **제출** 버튼 클릭

> 💡 **팁**: sitemap.xml 파일에서 URL을 실제 주소로 수정하는 것을 잊지 마세요!

<br>

---

## 📁 프로젝트 구조

```
QR코드 생성기/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # QR코드 생성 로직
├── robots.txt          # 검색엔진 크롤러 설정
├── sitemap.xml         # 사이트맵 (SEO용)
└── README.md           # 이 문서
```

<br>

## 🛠️ 기술 스택

- **HTML5** - 웹 페이지 구조
- **CSS3** - 스타일링 및 반응형 디자인
- **JavaScript (ES6+)** - QR코드 생성 로직
- **QRCode.js** - QR코드 라이브러리

<br>

## 📝 체크리스트

배포 전에 확인하세요:

- [ ] GitHub Pages 배포 완료
- [ ] `robots.txt`의 URL을 실제 주소로 수정
- [ ] `sitemap.xml`의 URL을 실제 주소로 수정
- [ ] Google Analytics 측정 ID 교체 (선택사항)
- [ ] Google Search Console 등록 (선택사항)

<br>

---

## ❗ 문제 해결 (Troubleshooting)

### 배포 후 변경사항이 반영되지 않을 때

**증상:**
- 코드를 수정하고 푸시했는데 사이트에 반영이 안 됨
- 이전 버전이 계속 보임
- Google Analytics ID를 바꿨는데 적용이 안 됨

**해결 방법:**

#### 방법 1: 강력 새로고침 (Hard Refresh)
브라우저 캐시를 무시하고 서버에서 최신 파일을 다시 받아옵니다.

**Windows / Linux:**
```
Ctrl + Shift + R
```
또는
```
Ctrl + F5
```

**Mac:**
```
Cmd + Shift + R
```

#### 방법 2: 캐시 완전 삭제
1. 브라우저 설정 열기
2. "인터넷 사용 기록 삭제" 또는 "캐시 삭제"
3. "캐시된 이미지 및 파일" 선택
4. 삭제 후 페이지 새로고침

#### 방법 3: 시크릿 모드로 확인
- **Chrome**: `Ctrl + Shift + N`
- **Firefox**: `Ctrl + Shift + P`
- 시크릿 모드에서 사이트 접속

#### 방법 4: GitHub Pages 배포 상태 확인
1. GitHub 저장소로 이동
2. **Actions** 탭 클릭
3. 최근 배포가 완료되었는지 확인
4. 배포 완료 후 1-2분 대기

### Google Search Console "사이트맵을 읽을 수 없음" 오류

**원인:**
- GitHub Pages 배포가 완전히 완료되지 않음
- Google의 크롤러가 아직 접근하지 못함

**해결 방법:**
1. 5-10분 정도 기다린 후 다시 시도
2. 브라우저에서 직접 `https://사용자명.github.io/저장소명/sitemap.xml` 접속해서 파일 확인
3. 파일이 보인다면 Google Search Console에서 다시 제출
4. 단일 페이지 사이트는 sitemap 없어도 검색 노출 가능 (선택사항)

### QR코드가 생성되지 않을 때

**해결 방법:**
1. 입력창에 텍스트가 제대로 입력되었는지 확인
2. 브라우저 콘솔(F12) 열어서 에러 메시지 확인
3. 강력 새로고침(`Ctrl + Shift + R`) 시도
4. 다른 브라우저에서 테스트

<br>

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

<br>

---

<div align="center">

**Made with ❤️**

문제가 있거나 질문이 있으시면 Issues를 열어주세요!

</div>
