## 기여 가이드

### ./assets/contents.js

#### 역할 변수
```js
jobs = [
    ['도둑', '수호자', (...)],
    ['카사노바', '소리없는방귀빌런', (...)]
]
```
`jobs` 변수는 자세한 직업을 나타냅니다.  
첫번째 리스트는 `objects` 변수를 추가해서 결과를 나타내지만 두번째 리스트는 추가하지 않습니다.  

예를 들어, `동탄사우나수건도둑엄준식`의 `도둑`은 첫번째 리스트에 포함되므로 `objects` 변수의 `수건`이 추가되어있습니다.  
또는 `광주스터디카페소리없는방귀빌런`의 `소리없는방귀빌런`은 두번째 리스트에 포함되므로 `objects` 변수의 아이템이 결과값에 추가되어있지 않습니다.

#### 위치 변수
```js
var locations = [
  ['노인정', '사우나', (...)],
  ['폐지줍는할머니', '포식자', (...) '신천지']
]

```
`locations` 변수는 자세한 위치를 나타냅니다.  
이중 리스트로, 항목이 많아져 두줄로 분리된 형태로 구성되어있습니다.  
일반 장소는 첫번째 리스트에, [특별한 위치 변수](#특별한-위치-변수)를 정의하기 위해 추가된 장소와는 무관한 항목은 두번째 리스트에 작성합니다.  

`대전노인정카사노바김민식`의 `노인정`이 여기에 포함됩니다.  

##### 특별한 위치 변수
```js
var specificLocations = {
  '어린이보호구역': ['스피드레이서', true],
  '장례식장' : ['육계장미식가', true],
  '수능갤러리' : ['삼수생', true],
  '공사장' : ['안전모도둑', true],
  (...)
  '결국사람' : ['이름이되지못한', false],
  '시공의폭풍' : ['속으로빨려들어간', false]
}
```
`specificLocations` 변수는 특정 위치가 선택되었을때 역할을 고정하도록 명시합니다.  
악질 이름 생성기는 위치를 선택한 후 역할을 선택합니다. 하지만 이 변수에 명시되어있는 위치가 선택될 경우 역할을 고정합니다.  

아래와 같은 형태로 사용합니다.
 
```
  '위치' : ['직업', (a)]

* (a) 사용자가 입력한 지역을 결과값 제일 앞에 붙임 여부
```

* `수능갤러리삼수생박종현`은 `수능갤러리`가 선택되어 `삼수생`이 고정된 형태입니다.  
* (a)가 `true`인 `어린이보호구역`이 선택되었다면, `광산구어린이보호구역스피드레이서문성수`가 결과로 나타날 수 있습니다.
* (a)가 `false`인 변수가 선택된다면 이름 앞에 `(a)의 아들` 또는 `(a)의 딸`이 추가됩니다.
* (a)가 `false`인 `시공의폭풍`이 선택되었다면, `시공의폭풍속으로빨려들어간대구의아들박영준`이 결과로 나타날 수 있습니다.

*2020-05-09 수정
이제 특별한 위치 변수는 20%의 확률로 선택됩니다.  

#### 객체(목적어) 변수
```js
var objects = [
  '수건', '때밀이수건', (...)
]
```
`objects` 변수는 `jobs`의 첫번째 리스트가 선택되었을때 문장에 포함합니다.  
`마포경찰서테이저건수호자유현재`의 `테이저건`이 여기에 포함됩니다.  
