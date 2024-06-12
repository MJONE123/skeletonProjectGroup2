<template>
  <!-- 전체 화면 설정 -->
  <div class="container">
    <!-- 설정 글씨. 화살표 삽입 -->
    <div class="invisible_box_for_text">
      <div class="bold_text">설정</div>
    </div>

    <!-- 프로필이미지 -->
    <div class="ellipse"></div>

    <!-- 프로필 이름 -->
    <div
      class="name"
      style="left: 50%; transform: translateX(-50%); top: 395px"
    >
      문준일
    </div>

    <!-- 설정 개체 -->

    <div
      class="mini_menu"
      style="left: 50%; transform: translateX(-50%); top: 444px"
    >
      내정보
    </div>

    <div class="group1648">
      <div class="rectangle rectangle1532"></div>
      <div
        class="text"
        style="left: 50%; transform: translateX(-50%); top: 23px"
      >
        프로필 수정
      </div>
      <div class="rotated"></div>
    </div>

    <div
      class="mini_menu"
      style="left: 50%; transform: translateX(-50%); top: 616px"
    >
      가계부
    </div>

    <div class="group1651">
      <div class="rectangle rectangle1532"></div>
      <div
        class="text"
        style="left: 50%; transform: translateX(-50%); top: 23px"
      >
        수입분류 관리
      </div>
      <div class="rotated"></div>
    </div>

    <div class="group1652">
      <div class="rectangle rectangle1532"></div>
      <div
        class="text"
        style="left: 50%; transform: translateX(-50%); top: 23px"
      >
        지출분류 관리
      </div>
      <div class="rotated"></div>
    </div>

    <div class="group1649">
      <div class="rectangle rectangle1532"></div>
      <div
        class="text"
        style="left: 50%; transform: translateX(-50%); top: 23px"
      >
        내 정보 수정
      </div>
      <div class="rotated"></div>
    </div>

    <div class="group1650">
      <div class="rectangle rectangle1532 bordered"></div>
      <div
        class="text"
        style="left: 50%; transform: translateX(-50%); top: 23px"
      >
        내 정보 수정
      </div>
      <div class="rotated bordered"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 375px;
  height: 812px;
  position: relative;
  background: white;
  box-shadow: 40px 44px 64px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  overflow: hidden;
}

.invisible_box_for_text {
  position: absolute;
  width: 375px;
  height: 64px;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
}

/* 설정, 이름에 적용할 스타일 */
.bold_text {
  font-family: 'Mukta';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #111111;
}

.mini_menu {
  position: absolute;
  color: black;
  font-size: 14px;
  font-family: Inter;
  font-weight: 100;
  word-wrap: break-word;
  left: 24px;
  transform: translateX(-50%);
}

.group {
  position: absolute;
}

.rectangle {
  position: absolute;
}

.text {
  position: absolute;
  color: black;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  word-wrap: break-word;
}

.icon {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.rotated {
  transform: rotate(180deg);
  transform-origin: 0 0;
}

.bordered {
  border: 1px #999999 solid;
}

/* 프로필 이미지 css */

.ellipse {
  border-radius: 9999px;
  position: absolute;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.06);
  top: 108px;
  left: 64px;
  width: 248px;
  height: 248px;
  background: #dbdbdb url('아직안정해진이미지.jpg') center/cover;
}

.name {
  position: absolute;
  color: black;
  font-size: 18px;
  font-family: Mukta;
  font-weight: 600;
  line-height: 20.52px;
  word-wrap: break-word;
}

.group1648 {
  position: absolute;
  top: 475px;
  left: 0px;
  width: 376px;
  height: 65px;
  background: white;
}
.group1651 {
  position: absolute;
  top: 647px;
  left: 0px;
  width: 376px;
  height: 65px;
  background: white;
}
.group1652 {
  position: absolute;
  top: 712px;
  left: -1px;
  width: 376px;
  height: 65px;
  background: white;
}
.group1649 {
  position: absolute;
  top: 537px;
  left: 0px;
  width: 376px;
  height: 65px;
  background: white;
}
.group1650 {
  top: 537px;
  left: 0px;
  width: 376px;
  height: 65px;
  background: white;
}

/* .rectangle1532 {
    background: white;
  } */

/* .rectangle1520 {
    background: white;
  } */
/* .iconChevronLeft {
    top: 16px;
    left: 25px;
    width: 178px;
    height: 29.54px;
  } */
/* .chevronLeftThin {
    width: 9.49px;
    height: 20.75px;
  } */
</style>

/* Icon/Chevron_Left */ position: absolute; width: 24px; height: 29.54px; left:
25px; top: 16px;
