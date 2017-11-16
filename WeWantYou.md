# Huiseoul 에서 Engineer 를 찾습니다

### Introduction

- Huiseoul 플랫폼팀을 맡고 있는 최종욱(@johnwook)입니다.
- Huiseoul 과 함께할 Software engineer 를 찾습니다.
- 어떤 분을 찾고 있는지, 우리는 어떤 일을 어떻게 하고 있는지, 앞으로 하고 싶은 일은 무엇인지 이야기합니다.

### What We Make

우리는 [Huiseoul](http://www.huiseoul.com/) 이라는 서비스를 만들고 있습니다. 가장 단순히 표현하면, Huiseoul 은 중국에서의 한국 화장품 직구를 위한 서비스입니다. 하지만 일반적인 쇼핑몰은 아닙니다. 피부 고민에 맞는 최적의 화장품을 전문가의 상담을 통해 가장 빠르게 구매할 수 있는 서비스입니다.

2016년, 많은 사람들이 [#ConvComm](https://medium.com/chris-messina/2016-will-be-the-year-of-conversational-commerce-1586e85e3991) 이라는 단어에 주목했습니다. 세계 곳곳에서 [messaging](https://medium.com/@Operator/the-messaging-future-is-here-and-its-going-to-change-everything-99e29bcff68e) 을 기반으로 한 [다양한](http://adage.com/article/digital/wechat-teaches-future-social-commerce/306765/) [시도](http://www.koreaherald.com/view.php?ud=20170215000895)도 있었습니다(지금도 계속되고 있구요). 대부분의 시도는 Facebook messenger 나 kik 등의 플랫폼 위에서 user의 몇 가지 command 에 대응할 수 있는 bot 을 만드는 일이었습니다. 신통치 않았습니다. [여전히 기대중이라는 사람](https://medium.com/chris-messina/2016-will-be-the-year-of-conversational-commerce-1586e85e3991)도 있고 [이제는 끝났다는 의견](http://www.looah.com/article/view/2061)도 있습니다.

Bot 은 틀렸을 지 몰라도 messaging 은 틀리지 않았다고 생각합니다. 사람들은 모바일로 좋은 상품을 믿고 편하게 구매하고 싶어합니다. 이런 구매자와 판매자 사이의 가장 뛰어난 연결고리는 ‘대화'입니다. 지구에서 처음 구매자와 판매자 사이에 거래가 생긴 날 이래, 사람이 사람에게 물건을 산다는 사실은 바뀌지 않았습니다. 바뀌지 않는 사실위에 기술이라는 날개를 다는 것이 우리가 하는 일입니다.

### What We've Done

![image](https://user-images.githubusercontent.com/2437909/32874444-a60d737c-cad5-11e7-9192-9daafbc5ec80.png)

- 중국 시장에 React Native 로 만든  [Android/iOS app 을 출시](https://github.com/facebook/react-native/pull/9807)했습니다.
- 전문가와의 상담을 통한 한국 화장품 역직구라는 비즈니스 모델을 증명했습니다. 
- 보세창고를 통한 정식 수출, 고객용 mobile application, 상담사용 desktop/mobile application 을 운영했습니다.
- 최근 6개월 동안 20배 정도의 외형적 성장을, 내적으로는 scale up 을 할 수 있는 기술적 성장을 만들었습니다.

### Tech Stack

- 현재(2017. 11. 16) 기준 production 에서 사용중인 기술입니다.
- 최신의 것이 무조건 좋다고 생각하지 않습니다. 하지만 기술은 발전하고 있다고 믿습니다. 풀어야 하는 문제에 집중하기 위한 도구들을 사용합니다.
- Language: [TypeScript](https://www.typescriptlang.org/)
- Client
  - [React](https://github.com/facebook/react)
  - [React Native](https://github.com/facebook/react-native), [Electron](https://electron.atom.io/)
  - [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree)
  - [styled-components](https://github.com/styled-components/styled-components)
- Backend
  - [GraphQL](http://graphql.org/)
    - [Apollo Server](https://github.com/apollographql/apollo-server) on [express](https://github.com/expressjs/express)
  - [SocketCluster](https://github.com/socketcluster/socketcluster) on [express](https://github.com/expressjs/express)
  - [Dataloader](https://github.com/facebook/dataloader)
  - [DynamoDB](https://aws.amazon.com/dynamodb/), [PostgreSQL](https://www.postgresql.org/)
- Common to client/backend
  - [Jest](https://github.com/facebook/jest)
  - [Prettier](https://github.com/prettier/prettier), [TSLint](https://github.com/palantir/tslint)
- Infrastructure
  - [AWS China](https://www.amazonaws.cn/en/): Elastic Beanstalk, SQS, DynamoDB, S3, ...
  - [Vangen CDN](http://www.vangen.cn/index/cdn/page), [Jiguang Aurora](https://www.jiguang.cn/push)
- Deployment chain
  - Github PR => [Circle CI](https://circleci.com/), [Peer Review](https://engineering.huiseoul.com/pr-peer-review-pull-request-d301399f6a17) => Production
    - Backend: Staging 없이 모든 master branch 가 production 으로 배포
    - Client: Mobile app 의 경우 매주 배포, 다른 application 은 project 상황에 따름
- Communication
  - Trello, Slack
- 참고
  - [Engineering Blog](https://engineering.huiseoul.com)
  - [Welcome to huiseoul](https://github.com/huiseoul/welcome)

### How we do

![image](https://user-images.githubusercontent.com/2437909/32874148-bb9d1424-cad3-11e7-90e6-39bacab452b7.png)

- 좋은 엔지니어는 좋은 습관이 만든다고 생각합니다.
- 좋은 습관을 만들기 위해 노력합니다.
  - 매일 오전 10시에 daily meeting 을 통해 한 일 / 할 일 / 도움이 필요한 부분을 공유합니다.
  - [Peer Review](https://engineering.huiseoul.com/pr-peer-review-pull-request-d301399f6a17) 로 자신의 코드를 공유합니다.
  - 지속적인 배포와 test code 로 작성한 코드에 대한 책임감을 요구합니다.
  - [Prettier](https://github.com/prettier/prettier), [TSLint](https://github.com/palantir/tslint) 로 format quality 를 유지합니다.
  - 2주마다의 sprint 회고를 통해서 팀을 돌아보고 더 나아질 수 있는 부분을 점검합니다.
- 좋은 엔지니어는 끊임없이 배워야 합니다.
- 더 나은 기술을 찾고 이를 끊임없이 적용합니다.
  - 신기술만을 쫓는 hype driven development 는 하지 않습니다.
  - 과거의 기술에 매달려 있어서도 안 됩니다.
  - 기술을 열린 태도로, 비판적으로 받아들입니다.
  - 모든 엔지니어는 일주일에 한번 기존의 코드를 더 낫게 만드는 방법에 관해서 팀원을 대상으로 발표합니다.
- 스타트업 엔지니어가 얻을 수 있는 가장 큰 보상은 성장입니다.
  - 지금까지 쭉 성장해왔고, 앞으로 더 빠르게 성장할 것입니다.
  - 위의 기술 stack 을 안정적으로 production 에 적용한 손꼽는 곳입니다.
  - 팀 사이즈가 아직 작아, 욕심내는 모든 부분에 참여할 수 있습니다.
- 성장에는 고통이 따릅니다.
  - 자신의 업무결과를 가능한 투명하게 드러냅니다.
  - 발전하는 기술과, 늘어나는 요구조건, 성장하는 기술 스택에 적응하는 것은 개인의 능력 / 노력에 달려있습니다.

### Qualification

![image](https://user-images.githubusercontent.com/2437909/32880363-b80c2c92-caf0-11e7-894c-5d84f0e28acd.png)

- 기본 조건
  - Typescript(at least javascript ES2015) 로 문제풀이가 가능하신 분
  - 간단한 test case 를 작성할 수 있으신 분 (library 무관)
  - Github 에 계정이 있으며 자신의 코드를 남과 공유해본 경험이 있으신 분
  - Internet browser 에 주소를 입력하고 엔터를 쳤을 때부터 화면이 뜨기까지의 과정을 5분 이상 설명하실 수 있는 분
  - 한글 문서와 영어 문서를 읽는 데 걸리는 시간 차이가 30% 안쪽이신 분
  - 한국인 팀 동료와의 의사소통에 문제가 없으신 분
- 우대 조건
  - React, React Native, GraphQL 중 한 가지 이상의 기술이 적용된 서비스 제작 및 운영에 메인으로 참여하신 분
  - React component 의 layout 및 styling 에 자신 있으신 분
  - Written communication 에 익숙하신 분
  - Open source 프로젝트에 기여하신 경험이 있는 분
- 특별 우대 조건
  - 실력과 노력과 배움에 자신이 있으신 분
    - 이 경우 위의 조건들은 무시하셔도 됩니다.
- 지원 분야
  - (당분간은) 기본적으로 full stack 을 지향합니다.
  - 정말 커다란 회사가 아닌 이상 엔지니어가 대부분의 흐름을 파악해야 한다고 생각하기 때문입니다.
  - 풀어야 하는 문제가 점점 복잡하고 커질수록 특정 분야의 전문성이 필요하다고 생각합니다.
- 모집 인원
  - 0 명

### Process

- 서류 지원
- 온라인 코딩 테스트
- 팀장 면접
- 팀원들과의 [mob coding](https://en.wikipedia.org/wiki/Mob_programming)
  - 서로를 리뷰하는 시간이 되겠습니다.
- 대표와의 면담 및 수습기간(협의 사항)
  - 연봉 및 보상 협의
- 합류

### How to apply

- 다음의 사항을 포함한 pdf 문서를 첨부한 후 engineer@huiseoul.com 로 보내주세요. 24 시간 안에 답장 드리겠습니다.
  - 기본 인적사항
    - Github 계정 포함
  - 프로젝트 경험
  - 자신이 작성한 code 를 확인할 수 있는 주소
    - Open source project 의 PR, 개인 project repository 주소, gist 등
    - 파일로 첨부된 것은 보지 않겠습니다.
  - 위의 기본 조건, 우대 조건, 특별 우대 조건의 해당사항에 대한 코멘트
  - 희망 연봉

### Company

- 총 50억 이상의 해외 투자 유치 (비공개 금액 제외)
  - [[1]](http://platum.kr/archives/44865), [[2]](http://platum.kr/archives/68033), [[3]](http://platum.kr/archives/79114), [[4]](http://platum.kr/archives/87363)
- 서울특별시 강남구 선릉로 107길 13 정진빌딩 3층

### Contact

- 기타 문의사항은 johnwook.choi@huiseoul.com 으로 부탁드립니다. 12 시간 안에 답장 드리겠습니다.
