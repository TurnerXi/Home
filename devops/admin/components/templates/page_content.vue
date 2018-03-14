<template>
<section class="page_header">
  <h3 class="page-title">Editable Table</h3>
  <ul class="breadcrumb">
    <li> <a href="#">Home</a>
      <span class="divider">/</span>
    </li>
    <li> <a href="#">Data Table</a>
      <span class="divider">/</span>
    </li>
    <li class="active"> Editable Table </li>
    <li class="pull-right search-wrap">
      <form action="search_result.html" class="hidden-phone">
        <div class="input-append search-input-area"> <input class="" id="appendedInputButton" type="text"> <button class="btn" type="button"><i class="icon-search"></i> </button> </div>
      </form>
    </li>
  </ul>
</section>
</template>
<script type="text/javascript">
export default {}
</script>
<style scoped>
.page-title {
  font-size: 28px;
  display: block;
  font-weight: normal !important;
  margin: 13px 0px 8px 0px;
  font-family: 'MyriadPro-Light';
}

.breadcrumb {
  padding: 8px 15px;
  margin: 0 0 20px;
  list-style: none;
  background-color: #f5f5f5;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.breadcrumb>li {
    display: inline-block;
    text-shadow: 0 1px 0 #fff;
}

.breadcrumb li > a {
    color: #888888;
}

.breadcrumb>li>.divider {
    padding: 0 5px;
    color: #ccc;
}

.breadcrumb>.active {
    color: #999;
}
</style>
