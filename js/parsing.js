const xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const myObj = JSON.parse(this.responseText);
        HTMLDOM(myObj);
    }
};
xmlhttp.open("GET", "http://localhost/json-act-php/");
xmlhttp.send();

function HTMLDOM(obj){
    var txt = "";
    var bg = "service-sec";
    for (var i = 0 ; i < obj.music.length; i++) {

        var entriesOtl1 = Object.entries(obj.music[i].outline);

        txt +=
        `
        <section class="${bg}" id="${convertCaps(obj.music[i].lesson)}">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                  <div class="heading">
                    <h2><small>${convertCaps(obj.music[i].lesson)}</small></h2>
                </div>
              </div>
              <div class="col-md-12">
                <div class="row">
                `;

                for (var j = 0 ; j < entriesOtl1.length; j++) {
                  var entriesOtl2 = Object.entries(entriesOtl1[j][1]);
                  txt += 
                  `
                  <div class="col-md-6 text-sm-center service-block mt-3"> <i class="fa-sharp fa-solid fa-music fa-beat-fade py-3"></i>
                  <h3>${convertCaps(entriesOtl1[j][0])}</h3>
                  <div class="accordion" id="accordionExample">`;

                  for (var k = 0 ; k < entriesOtl2.length; k++) {
                    var entriesOtl3 = Object.entries(entriesOtl2[k][1]);
                    txt += `
                    <div class="card">
                      <div class="card-header" id="heading${i}-${j}-${k}">
                        <h4 class="mb-0">
                          <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${i}-${j}-${k}" aria-expanded="true" aria-controls="collapse${i}-${j}-${k}">
                          ${convertCaps(entriesOtl2[k][0])}
                          </button>
                        </h4>
                      </div>
                      <div id="collapse${i}-${j}-${k}" class="collapse show" aria-labelledby="heading${i}-${j}-${k}" data-parent="#accordionExample">
                        <div class="card-body">
                          <ul class="text-secondary">`;
                          for (var l = 0 ; l < entriesOtl3.length; l++) {

                            if(Array.isArray(entriesOtl3[l][1])){
                              for (var item = 0 ; item < entriesOtl3[l][1].length; item++) {
                                txt += 
                                `
                                    <li>${entriesOtl3[l][0]} - ${entriesOtl3[l][1][item]}</li>
                                `;
                              }

                            }
                            //check if leng of sub obj is 1
                            else if(entriesOtl2.length == 1){
                              // Verify if data type is object (for Company object)
                              if (typeof entriesOtl2[k][1] === "object"){
                                txt += 
                                `
                                    <li>${entriesOtl3[l][0]} - ${entriesOtl3[l][1]}</li>
                                `;
                              }
                              else{
                                txt += 
                                `
                                    <li>${entriesOtl2[k][1]}</li>
                                `;
                                break;
                              }
                            }
                            //check if leng of sub obje is 3 or 2 or 1
                            else if(entriesOtl2.length == 2 ||  entriesOtl2.length == 3){
                              txt += 
                              `
                                  <li>${entriesOtl2[k][1]}</li>
                              `;
                              break;
                            }
                            else{
                              txt += 
                              `
                                  <li>${entriesOtl3[l][1]}</li>
                              `;
                            }
                          }
                          txt += `
                          </ul>
                        </div>
                      </div>
                    </div>
                    `;
                  }
                txt += `
                  </div>
                </div>
                  `;
                }

                txt += `
                </div>
              </div>
            </div>
          <!-- /.row --> 
          </div>
        </section>
        
        `;

        document.getElementById("lessonItems").innerHTML = txt;
        // Changing background
        if(bg === "service-sec"){
            bg= "about-sec parallax-section"
        }
        else{
            bg= "service-sec"
        }
    }
    

}

function convertCaps(text){
  return text.replace(/([A-Z])/g, ' $1').trim();
}
function isObject(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value)
  );
}

