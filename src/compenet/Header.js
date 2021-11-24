const Header = () => (
    <div>
       <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light text-center">
        <div class="container-fluid">
          <a class="navbar-brand d-lg-none" href="https://github.com/mustabbas/">Welcome</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="https://github.com/mustabbas/">Portfolio</a>
              <a class="nav-link" href="#about">About</a>
              <a class="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <section class="Heading pt-5 pb-lg-5">
      <div class="container my-md-5 py-md-5 text-center col-lg-8 col-xl-6">
        <h1 class="heading-title">
          Hey there. I’m Mustafa Abbas.<br />
          <span class="text-success">I’m a software developer</span>
        </h1>
        <p class="heading-p pt-4 pt-lg-0">I can help you build a product, feature, or website. Please look through some of my work and experience! If you like what you see and have a project you need to be coded, don’t hesitate to contact me.</p>
        <ul class="d-flex justify-content-center list-unstyled flex-wrap social-icons">
          <li class="p-2">
            <a href="https://github.com/mustabbas"><img src="assets/img/github_dark.svg" alt="Vector-github" /></a>
          </li>
          <li class="p-2">
            <a href="https://www.linkedin.com/in/mustabbas/"><img src="assets/img/linkedin.svg" alt="Vecto-linkedin" /></a>
          </li>
          <li class="p-2">
            <a href="https://angel.co/u/mustafa-abbas-4"><img src="assets/img/angellist_dark.svg" alt="Vecto-angellist" /></a>
          </li>
          <li class="p-2">
            <a href="https://medium.com/@mustabbas2000"><img src="assets/img/medium_dark.svg" alt="Vector-medium" /></a>
          </li>
        </ul>
        <div class="d-flex justify-content-center py-lg-5 my-5"><img src="assets/img/ArrowDown.svg" alt="ArrowDown" /></div>
      </div>
    </section>
</div>
)

export default Header;