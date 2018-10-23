<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Input Phenotype Observations</h4>
    </div>
    <div class="content">
      <form>
        <div class="row">
          <div class="col-lg-12">
            <fg-input type="text"
                      label="Date"
                      placeholder="YYYY-MM-DDTHH:MM:SS">
            </fg-input>
          </div>
          <div class="col-lg-12">
            <fg-input type="text"
                      label="Field"
                      placeholder="Colin's MVP">
            </fg-input>
          </div>
          <div class="col-lg-12">
            <fg-input type="text"
                      label="Trial"
                      placeholder="1">
            </fg-input>
          </div>
          <div class="col-lg-12">
            <fg-input type="text"
                      label="Plot"
                      placeholder="3">
            </fg-input>
          </div>
          <div class="col-lg-12">
            <drop-down tag="div" title="Simple">
              <li><a href="#">Notification 1</a></li>
              <li><a href="#">Notification 2</a></li>
              <li><a href="#">Notification 3</a></li>
              <li><a href="#">Notification 4</a></li>
              <li><a href="#">Another notification</a></li>
            </drop-down>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import Dropdown from '~/components/UIComponents/Dropdown';

  export default {
    layout: "dashboard"
  }
</script>
