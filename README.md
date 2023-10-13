# 내 손 안의 셔틀버스 지도, 버스킹  

## 목차  

- [내 손 안의 셔틀버스 지도, 버스킹](#내-손-안의-셔틀버스-지도-버스킹)
  - [목차](#목차)
  - [프로젝트 개요](#프로젝트-개요)
    - [프로젝트 배경](#프로젝트-배경)
    - [주요 기능](#주요-기능)
  - [팀원](#팀원)
    - [담당 업무](#담당-업무)
  - [서비스 아키텍처](#서비스-아키텍처)
  - [개발 환경](#개발-환경)

## 프로젝트 개요  

> 프로젝트 진행 기간: 2023.07.10. ~ 2023.08.18.  

### 프로젝트 배경  

### [주요 기능](./docs/features.md)  

[👀 모든 기능 둘러보기](./docs/features/features.md)  

일반 사용자  

  - 내 현재 위치 조회  
  - 실시간 버스 위치 조회  

관리자  

  - 교육생 관리  
  - 버스 노선 관리  

버스 기사  

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

Back-End

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

Front-End

Infrastructure  
  - Amazon EC2  

Other Dependencies  
  - OSRM 5.27.1  
  - OpenVidu 2.28  
