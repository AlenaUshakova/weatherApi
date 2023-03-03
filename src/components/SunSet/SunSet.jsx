

export const SunSet = ({ sun, set }) => {
  
  return (
    <>
      <input type="radio" name="time" id="sunrise" checked />
      <input type="radio" name="time" id="sunset" />
      <div id="app">
        <div class="glow"></div>
        <div class="sky"></div>
        <div class="stars"></div>
        <div class="city">
          <div class="building">
            <div class="tower">
              <div class="windows"></div>
            </div>
            <div class="tower">
              <div class="windows"></div>
              <div class="ledge"></div>
            </div>
            <div class="tower">
              <div class="windows"></div>
            </div>
          </div>
          <div class="building">
            <div class="tower">
              <div class="windows"></div>
            </div>
            <div class="tower">
              <div class="windows"></div>
              <div class="ledge"></div>
            </div>
            <div class="tower">
              <div class="windows"></div>
              <div class="ledge"></div>
            </div>
          </div>
          <div class="building">
            <div class="tower">
              <div class="windows"></div>
            </div>
            <div class="tower">
              <div class="windows"></div>
              <div class="ledge"></div>
            </div>
            <div class="tower">
              <div class="windows"></div>
            </div>
          </div>
        </div>
        <div class="times">
          <div class="time" data-sunrise="7:20" data-sunset="9:14"></div>
          <div class="time" data-sunrise="7:25" data-sunset="9:18"></div>
          <div class="time" data-sunrise="7:29" data-sunset="9:23"></div>
          <div class="time" data-sunrise="7:32" data-sunset="9:32"></div>
          <div class="time" data-sunrise="7:37" data-sunset="9:37"></div>
        </div>
        <div class="heavens">
          <label for="sunrise" class="sunrise" data-title="Sunrise"></label>
          <label for="sunset" class="sunset" data-title="Sunset"></label>
        </div>
        <div class="clouds"></div>
      </div>
    </>
  );
};

