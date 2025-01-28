<template>
  <section id="it-service" class="cta-service">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-6 service-left">
          <img  style=" float: right;" src="/images/about-1-1.jpg">
        </div>
        <div class="col-xl-6">
          <div class="cta-three__content">
            <div class="block-title">
              <h2 class="block-title__title">We run all kinds of IT Services <br>
                <span class="block-title__title">that your success</span></h2><!-- /.block-title__title -->
              <p class="block-title__text">
                Our IT Services are designed to drive your success with tailored solutions, expert support,
                and innovative technology. From network management to cybersecurity, we provide reliable, efficient,
                and scalable IT support to meet all your needs.
                Trust us for unparalleled service and proactive problem-solving.</p><!-- /.block-title__text -->
            </div><!-- /.block-title -->
            <div class="cta-three__btn-block">
              <a href="#" class="thm-btn cta-three__btn-one">Read More</a>

              <a href="#footer" class="thm-btn cta-three__btn-two">Contact Us</a>
            </div><!-- /.cta-three__btn-block -->
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

</script>

<style scoped>
.cta-service{
  background-color: #F0F1F5;
  background-image: url("	http://el.commonsupport.com/newwp/intech/wp-content/themes/intech/assets/images/background/cta-3-1-bg.jpg") !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right center;
}
.container-fluid{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.service-left{
  padding: 0;
  object-fit: cover;
}
.cta-three__content{
  padding-left: 75px;
  padding-right: 50px;
  padding-top: 115px;
}
@media only screen and (max-width: 640px) {
  .cta-three__content{


    padding-left: 15px;
    padding-right: 15px;
    padding-top: 25px;
  }
}
.block-title{
  margin-bottom: 40px;
}
.block-title__title{
  font-size: 35px;
  line-height: 1.2em;
  margin: 0;
  color: #2D2C2C;
  font-family: var(--heading-font);
  font-weight: 600 !important;
}
.block-title__text{
  color: #222222;
  font-weight: 600;
  line-height: 2.1em;
  margin-top: 30px;
}
.cta-three__btn-one{
  background-color: #5538F4 ;
  margin-right: 20px;

  margin-top: 12px;

}
.cta-three__btn-one:hover{
  background-color: #000000;
}
.thm-btn{
  border: none;
  outline: none;

  display: inline-block;
  vertical-align: middle;
  font-size: 17px;
  font-family: var(--heading-font);
  font-weight: 600;
  color: #fff;
}
.cta-three__btn-two{
  background-color: #20DFE3;
  margin-top: 12px;
}
.cta-three__btn-two:hover{
  background-color: #000000;
}
</style>

