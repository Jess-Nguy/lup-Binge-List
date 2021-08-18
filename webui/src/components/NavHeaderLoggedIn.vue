<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid" id="nav">
      <a class="navbar-brand" href="#">BingeList</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/browse" class="nav-link">Browse</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/stats" class="nav-link">Stats</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/forum" class="nav-link">Forum</router-link>
          </li>
        </ul>
      </div>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    
    </div>
  </nav>
  <router-view />
</div>
</template>