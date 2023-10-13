# 내 손 안의 셔틀버스 지도, 버스킹  

> 프로젝트 진행 기간: 2023.07.10. ~ 2023.08.18.  

## 목차  

- [내 손 안의 셔틀버스 지도, 버스킹](#내-손-안의-셔틀버스-지도-버스킹)
  - [목차](#목차)
  - [프로젝트 배경](#프로젝트-배경)
  - [서비스 기능](#서비스-기능)
  - [팀원](#팀원)
    - [담당 업무](#담당-업무)
  - [서비스 아키텍처](#서비스-아키텍처)
  - [개발 환경](#개발-환경)


## 프로젝트 배경  

## [서비스 기능](./docs/features.md)  

[👀 모든 기능 자세히 둘러보기](./docs/features.md)  

- [1. 일반 사용자 기능](./docs/features.md#1-일반-사용자-기능)
  - [1.1. 로그인](./docs/features.md#11-로그인)
  - [1.2. 내 위치 및 버스 위치 조회](./docs/features.md#12-내-위치-및-버스-위치-조회)
  - [1.3. 셔틀버스 탑승을 위한 QR 코드 생성](./docs/features.md#13-셔틀버스-탑승을-위한-qr-코드-생성)
  - [1.4. 셔틀버스 운행 간의 불편 사항 신고](./docs/features.md#14-셔틀버스-운행-간의-불편-사항-신고)
- [2. 버스 기사 기능](./docs/features.md#2-버스-기사-기능)
  - [2.1. 버스 운행 시작/종료](./docs/features.md#21-버스-운행-시작종료)
  - [2.2. 버스 운행 상태 확인](./docs/features.md#22-버스-운행-상태-확인)
  - [2.3. 관리자와의 긴급 화상 통화](./docs/features.md#23-관리자와의-긴급-화상-통화)
  - [2.4. 사용자의 QR 코드 인식](./docs/features.md#24-사용자의-qr-코드-인식)
- [3. 관리자 기능](./docs/features.md#3-관리자-기능)
  - [3.1. 교육생 등록](./docs/features.md#31-교육생-등록)
  - [3.2. 교육생 조회 및 수정](./docs/features.md#32-교육생-조회-및-수정)
  - [3.3. 셔틀버스 노선 등록](./docs/features.md#33-셔틀버스-노선-등록)
  - [3.4. 셔틀버스 노선 조회 및 삭제](./docs/features.md#34-셔틀버스-노선-조회-및-삭제)
  - [3.5. 긴급 화상 통화](./docs/features.md#35-긴급-화상-통화)
  - [3.6. 셔틀버스 신고 조회](./docs/features.md#36-셔틀버스-신고-조회)

## 팀원  

| 팀장 기대성                                                                                                                                     | 김한결                                                                                                                                            | 권준일                                                                                                                                           | 방상제                                                                                                                                           | 이지헌                                                                                                                                          | 정호윤                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| <a href="https://github.com/meo-s"><img class="github-profile" alt="Daeseong" src="https://avatars.githubusercontent.com/u/70252044?v=4" /></a> | <a href="https://github.com/kmr5326"><img class="github-profile" alt="Hangyeol" src="https://avatars.githubusercontent.com/u/50177492?v=4" /></a> | <a href="https://github.com/wnsdlf925"><img class="github-profile" alt="Junil" src="https://avatars.githubusercontent.com/u/62425882?v=4" /></a> | <a href="https://github.com/JeBread"><img class="github-profile" alt="Sangje" src="https://avatars.githubusercontent.com/u/108921478?v=4" /></a> | <a href="https://github.com/heon-2"><img class="github-profile" alt="Jiheon" src="https://avatars.githubusercontent.com/u/122588664?v=4" /></a> | <a href="https://github.com/jhy1812"><img class="github-profile" alt="Hoyoon" src="https://avatars.githubusercontent.com/u/122588619?v=4" /></a> |

### 담당 업무  

🙋🏻‍♂️ 기대성  

- 서버 인프라 구성  
- 컨테이너 이미지 배포를 위한 Jenkins 파이프라인 작성  
- Spring Security JWT 인증 기능 구현  
- GPS 위치 데이터 보정 서비스 구현  
- OSRM을 사용한 최적 경로 생성 HTTP API 작성  

🙋🏻‍♂️ 김한결  

🙋🏻‍♂️ 권준일  

🙋🏻‍♂️ 방상제  

🙋🏻‍♂️ 이지헌  

🙋🏻‍♂️ 정호윤  

## 서비스 아키텍처  

![A service architecture](./docs/rsc/README/service-architecture.png)

## 개발 환경  

- Back-End
  - MySQL 8.1.0  
  - Redis 7.2  
  - OpenJDK 17.0.7  
  - Spring Boot 3.1.2  
    - Spring Security  
    - Spring Data JPA  
    - Spring Data Redis  
  - Go 1.21.0  
  - uber.go/fx 1.20.0  
  - gin 1.9.1  
- Front-End
- Infrastructure  
  - Amazon EC2  
- Other Dependencies  
  - OSRM 5.27.1  
  - OpenVidu 2.28  
