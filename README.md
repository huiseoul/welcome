# Welcome

- Welcome to Huiseoul!
- 최대한 빨리 같이 일하기 위해 해야할 일들을 정리한 파일입니다.

## Step 0 - 계정

- 메시지나 메일 등을 통해 원하는 계정명(`${영문이름}.${영문성}` 추천)을 말씀해주시면 google 계정을 만들어 드립니다.
- 생성된 google 계정 메일로 slack 초대 메일도 보낼게요.
- github ID 를 알려주세요. Huiseoul organization 에 추가하겠습니다.
  - 기본적으로 모든 engineer는 모든 repository 에 admin 권한으로 접근 가능합니다.
- AWS 계정은 google 계정명으로 생성해서 알려드릴게요.
  - 기본적으로 모든 engineer는 모든 AWS resource 에 admin 권한을 갖습니다.
- Trello 계정을 알려주세요. 위에서 만든 기업 계정으로 가입하시는 것을 추천합니다.
- Engineer 끼리 노는(?) discord 서버가 있습니다. 위 계정 메일로 초대 하겠습니다. 거절하셔도 돼요.(optional)
- Step 0 가 끝나면, Step 0 를 끝냈다고 slack channel 에 알려주세요. 환영하겠습니다!

## Step 1 - 개발 환경 설정::Hardware

- 기본적으로 MBP 13인치를 사용하고 있습니다.
  - 신형 모델인 터치바는 선호가 있을 것 같아요. 원하는 모델을 말씀해주세요. (사실 저는 신형 아직 못 써봤어요..)
- 모니터는 24인치를 사용하고 있습니다.
  - 공통으로 사용하는 모델은 benq 2470 이에요. 다른 모델을 원하신다면 말씀해주세요.
- 무선 키보드, 매직 마우스는 원하는 경우에 한해서 벌크 모델로 드려요.
  - 원할 경우 말씀해주세요.
- 위에서 이야기한 것들을 본인의 취향에 맞게 결정하셔서 slack 의 `#engineering` channel 에 저(`@johnwook`)를 mention 해서 알려주세요.
  - 문의는 항상 환영이에요. channel 에 주셔도, 개인 메시지를 주셔도 좋습니다.(channel 선호)
  - 결정이 빠를수록 구매도 빨라집니다.
  
## Step 2 - 개발 환경 설정::Software

- Software 설정은 기본적으로 취향을 타는 부분이니 아래는 현재 팀원들이 사용하는 기본적인 취향이라고 생각해주세요.
  - 일만 할 수 있는 상태면 무시해도 된다는 의미입니다.
  
- IDE: https://code.visualstudio.com/
  - vim, dracula official, final-newline, material icon theme, tslint 등 추천
- Terminal: https://www.iterm2.com/
  - https://github.com/robbyrussell/oh-my-zsh
- Node.js: https://github.com/nodenv/nodenv
  - 모든 node.js project 는 repository 내에 `.node-version` 파일이 있습니다.
  - https://github.com/nodenv/nodenv-package-rehash
  - 사족) python 은 pypenv, ruby 는 rbenv 추천해요.
- Homebrew: https://brew.sh/
  - git, yarn, awscli 등등

## Step 3 - Warm Up::React

- Huiseoul 의 모든 project 의 client 는 React 를 사용합니다.
- [React tutorial](https://facebook.github.io/react/tutorial/tutorial.html)을 죽 따라해주세요.
  - 그냥 따라하는 건 아니고, 자기 계정의 github repository 를 만들어 과정을 공유해주세요.
  - 각 단계마다, 혹은 필요할 때마다 commit 및 push 를 해주세요.
  - commit 메시지도 볼게요. 모든 commit message 는 팀분들이 본다는 생각으로 편하게(?) 작성해주세요.
  - 정답이 있는 문제가 아니니, 궁금한 건 이것저것 추가해보셔도 되고 구조를 바꾸셔도 되고 다 돼요.
  - 뭘 어떻게 commit 하라는 건지 모르겠다라는 생각이 들거예요.
  - 그럼 `뭐가 막혔고 뭐하라는 건지 모르겠다.` 라는 내용으로 issue 를 만들어 주세요. 팀분들이 도와드릴 거예요.
  - 때때로 lint 나 typescript 적용 등 현재 project 들에서 적용하는 방식 등을 팀분들이 이슈로 만들어서 올릴 거예요. 그럼 follow up 해주시면 됩니다!
  - 이 Warm up 의 목적입니다.
    - 팀원들과의 github communication follow up
    - React 의 기본 돌아보기
    - Typescript, TSLint 등 팀 내 적용중인 표준 적용하기

## Step 4 - Warm Up::MobX

- Huiseoul 에서는 React 의 state management 를 위해서 MobX 를 사용합니다.
  - 특히 제가(@johnwook) 좋아해요.(전 코딩 잘 안해요. 참고.)
- [MobX tutorial](https://mobx.js.org/getting-started.html)을 죽 따라해주세요.
  - 두번째 task 에 MobX 를 적용해도 좋겠습니다.
  - https://www.robinwieruch.de/redux-mobx-confusion/ 이런 글도 읽고, MobX 공식 문석도 읽어보고, 또 다시 React 로 돌아가서 공식 문서도 읽어보고 그래 주세요.
  - 이 Warm up 의 목적입니다.
    - 팀 내 표준(?)인 MobX 와 친해지기
    - 일을 어떤 식으로 진행하는지 서로 파악하기

## Step 5 - Warm Up::GraphQL

- Huiseoul 의 backend 는 GrpahQL 단일 서버로 통일되어 있습니다.
- [GraphQL Server](https://github.com/apollographql/graphql-server) 를 봐주세요. 
  - tutorial 은 따로 없고, 실제 production code 를 보면서 이야기 나누기로 해요.

## Step 6 - Head First

- 나머지는 하면서 배우기로 해요.
- 실제 프로젝트에서 버그를 해결해 봅시다.
- 간단한(?) 버그를 팀분들 중 한분과 짝을 이뤄 해결해보려고 해요.
- 여러가지 사정에 따라 Step 5 와 Step 6 사이에 다른 일들이 더해질 수도 있습니다.
- 이야기하면서 조정해요!
