<template>
  <Header />
  <main class="main">
    <section class="admin">
      <div class="container">
        <div class="admin__switch-wrapper">
          <div class="admin__switch">
            <div class="admin__switch_off">וקפוהש תוסילופ</div>
            <div class="admin__switch_on active">תונורחא תועצה</div>
          </div>
          <IconAvatar />
        </div>
        <div class="admin__divider"></div>
        <div class="admin__search">
          <BaseButton :round="true" :icon="true" :mode="'primary'"
            >השדח העצה</BaseButton
          >
          <BaseInput
            :icon-name="'search'"
            :icon="true"
            :name="'user-search'"
            :id="'user-search'"
          />
        </div>
      </div>
      <TableOffers :cards="dataCards" />
    </section>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import IconAvatar from "../components/UI/IconAvatar.vue";
import BaseButton from "../components/UI/BaseButton.vue";
import BaseInput from "../components/UI/BaseInput.vue";
import TableOffers from "../components/TableOffers.vue";
export default {
  data() {
    return {
      dataCards: [
        {
          isActive: true,
          id: 123456789012,
          dateStart: "04.04.2020",
          dateEnd: "12.10.2019",
          phoneNumber: 46546543,
          orderId: "12-345-67",
          lastName: "םהרבא ןב קחצי",
          firstName: "רצומה םש",
          model: "בכר",
        },
        {
          isActive: true,
          id: 123456789012,
          dateStart: "04.04.2020",
          dateEnd: "12.10.2019",
          phoneNumber: 46546543,
          orderId: "12-345-67",
          lastName: "םהרבא ןב קחצי",
          firstName: "רצומה םש",
          model: "בכר",
        },
        {
          isActive: false,
          id: 123456789012,
          dateStart: "04.04.2020",
          dateEnd: "12.10.2019",
          phoneNumber: 46546543,
          orderId: "12-345-67",
          lastName: "םהרבא ןב קחצי",
          firstName: "רצומה םש",
          model: "בכר",
        },
        {
          isActive: false,
          id: 123456789012,
          dateStart: "04.04.2020",
          dateEnd: "12.10.2019",
          phoneNumber: 46546543,
          orderId: "12-345-67",
          lastName: "םהרבא ןב קחצי",
          firstName: "רצומה םש",
          model: "בכר",
        },
        {
          isActive: true,
          id: 123456789012,
          dateStart: "04.04.2020",
          dateEnd: "12.10.2019",
          phoneNumber: 46546543,
          orderId: "12-345-67",
          lastName: "םהרבא ןב קחצי",
          firstName: "רצומה םש",
          model: "בכר",
        },
        {
          isActive: false,
          id: 123456789012,
          dateStart: "04.04.2020",
          dateEnd: "12.10.2019",
          phoneNumber: 46546543,
          orderId: "12-345-67",
          lastName: "םהרבא ןב קחצי",
          firstName: "רצומה םש",
          model: "בכר",
        },
        {
          isActive: true,
          id: 123456789012,
          dateStart: "04.04.2020",
          dateEnd: "12.10.2019",
          phoneNumber: 46546543,
          orderId: "12-345-67",
          lastName: "םהרבא ןב קחצי",
          firstName: "רצומה םש",
          model: "בכר",
        },
        {
          isActive: false,
          id: 123456789012,
          dateStart: "04.04.2020",
          dateEnd: "12.10.2019",
          phoneNumber: 46546543,
          orderId: "12-345-67",
          lastName: "םהרבא ןב קחצי",
          firstName: "רצומה םש",
          model: "בכר",
        },
        {
          isActive: false,
          id: 123456789012,
          dateStart: "04.04.2020",
          dateEnd: "12.10.2019",
          phoneNumber: 46546543,
          orderId: "12-345-67",
          lastName: "םהרבא ןב קחצי",
          firstName: "רצומה םש",
          model: "בכר",
        },
        {
          isActive: true,
          id: 123456789012,
          dateStart: "04.04.2020",
          dateEnd: "12.10.2019",
          phoneNumber: 46546543,
          orderId: "12-345-67",
          lastName: "םהרבא ןב קחצי",
          firstName: "רצומה םש",
          model: "בכר",
        },
      ],
    };
  },
  components: {
    Header,
    IconAvatar,
    BaseButton,
    BaseInput,
    TableOffers,
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: url("../assets/img/bg-build-desctop.jpg") center center/cover
    no-repeat;
}
.admin {
  padding: 42px 0 42px;
  min-height: 830px;
  background-color: rgba(33, 50, 94, 0.8);
  &__switch-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon-avatar {
      display: none;
    }
  }
  &__switch {
    display: flex;
    width: 970px;
    background-color: #fff;
    border-radius: 35px;

    &_on,
    &_off {
      width: 50%;
      height: 40px;
      border-radius: 35px;

      font-size: 18px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      color: #5f5f5f;
    }
    .active {
      background-color: #ff7728;
      color: #fff;
    }
  }
  &__divider {
    margin: 26px 0;
    height: 2px;
    width: 100%;
    border-radius: 2px;
    background-color: #fff;
  }
  &__search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    .base-input {
      width: 272px;
    }
  }
}
.header {
  .profile-info__text {
    &:last-child {
      display: none;
    }
  }
}

@media (min-width: 768px) {
  .main {
    background: url("../assets/img/bg-build-desctop.jpg") center center/cover
      no-repeat;
  }
  .admin {
    padding: 42px 0 42px;
    min-height: 830px;
    background-color: rgba(33, 50, 94, 0.8);
    &__switch-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon-avatar {
        display: none;
      }
    }
    &__switch {
      display: flex;
      width: 970px;
      background-color: #fff;
      border-radius: 35px;

      &_on,
      &_off {
        width: 50%;
        height: 40px;
        border-radius: 35px;

        font-size: 18px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        color: #5f5f5f;
      }
      .active {
        background-color: #ff7728;
        color: #fff;
      }
    }
    &__divider {
      margin: 26px 0;
      height: 2px;
      width: 100%;
      border-radius: 2px;
      background-color: #fff;
    }
    &__search {
      display: flex;
      justify-content: space-between;
      margin-bottom: 35px;
      .base-input {
        width: 430px;
      }
    }
  }
  .header {
    .profile-info__text {
      &:last-child {
        display: none;
      }
    }
  }
}

@media (min-width: 1330px) {
  .header {
    &__avatar {
      border-radius: 100%;
    }
  }
  .admin {
    &__switch-wrapper {
      .icon-avatar {
        display: inline-block;
      }
    }
    &__switch {
      &_on,
      &_off {
        height: 58px;
        line-height: 58px;
        font-size: 30px;
      }
    }
    &__divider {
      margin: 15px 0 40px;
      height: 5px;
    }
    &__search {
      .base-input {
        width: 754px;
      }
    }
  }
}
</style>