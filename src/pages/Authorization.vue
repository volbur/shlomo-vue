<Header></Header>
  <section class="subheader">
    <div class="subheader__title"><span>השמ םייח</span> ,םולש</div>
  </section>

  <style lang="scss">
.subheader {
  position: relative;
  display: none;
  align-items: center;
  justify-content: flex-end;
  padding: 0 62px;
  height: 76px;
  background-color: #f5f5f5;
  box-shadow: inset 0 14px 16px -16px rgba(0, 0, 0, 0.4);
}

@media (min-width: 1330px) {
  .subheader {
    display: flex;
    &__title {
      text-align: right;
      font-size: 16px;
      line-height: 18px;
      span {
        font-weight: bold;
      }
    }
  }
}
</style>
