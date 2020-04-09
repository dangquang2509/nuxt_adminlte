<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar" style="height: auto;">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="~/assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#">
            <i class="fa fa-circle text-success" />
            Online
          </a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <button id="search-btn" type="submit" name="search" class="btn btn-flat"><i class="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu tree" data-widget="tree">
        <li class="header">
          MAIN NAVIGATION
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard" /><span>Dashboard</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="#"><i class="fa fa-circle-o" />Dashboard v1</a></li>
            <li><a href="#"><i class="fa fa-circle-o" />Dashboard v2</a></li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-files-o" />
            <span>Layout Options</span>
            <span class="pull-right-container">
              <span class="label label-primary pull-right">4</span>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="layout/top-nav.html"><i class="fa fa-circle-o" /> Top Navigation</a></li>
            <li><a href="layout/boxed.html"><i class="fa fa-circle-o" /> Boxed</a></li>
            <li><a href="layout/fixed.html"><i class="fa fa-circle-o" /> Fixed</a></li>
            <li><a href="layout/collapsed-sidebar.html"><i class="fa fa-circle-o" /> Collapsed Sidebar</a></li>
          </ul>
        </li>
        <li class="active">
          <a href="widgets.html">
            <i class="fa fa-th" /> <span>Widgets</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span>
          </a>
        </li>
        <li>
          <a href="calendar.html">
            <i class="fa fa-calendar" /><span>Calendar</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-red">3</small>
              <small class="label pull-right bg-blue">17</small>
            </span>
          </a>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<style scoped>
  .label {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
  }
</style>
