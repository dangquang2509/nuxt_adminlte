<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="#"><b>Admin</b>LTE</a>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">
          Sign in to start your session
        </p>

        <form action="#" method="post">
          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder="Email">
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Password">
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input id="remember" type="checkbox">
                <label for="remember">
                  Remember Me
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button type="submit" class="btn btn-primary btn-block">
                Sign In
              </button>
            </div>
          </div>
        </form>
        <br>
        <p class="mb-1">
          <a href="forgot-password.html">I forgot my password</a>
        </p>
        <p class="mb-0">
          <a href="register.html" class="text-center">Register a new membership</a>
        </p>
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
</template>

<script>
export default {
  layout: 'custom',
  head () {
    return {
      title: 'Login',
      bodyAttrs: {
        class: 'login-page'
      }
    }
  }
}
</script>
<style>

</style>
