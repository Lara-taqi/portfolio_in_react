function Projects(){
   const TOTAL_BOXES = 30;

 function createCheckboxes() {
  const container = document.getElementById("rem");

  container.innerHTML = "";

  for (let i = 1; i <= TOTAL_BOXES; i++) {
    const check_rem = document.createElement("input");
    check_rem.type = "checkbox";
    check_rem.id = "check" + i;

    check_rem.onchange = updateStorage;

    container.appendChild(check_rem);

  }
}
    function updateStorage() {
      let states = [];
      for (let i = 1; i <= TOTAL_BOXES; i++) {
        const checked = document.getElementById("check" + i).checked;
        states.push(checked);
      }
      localStorage.setItem("checkboxStates", JSON.stringify(states));
    }

    function loadrem() {
      const savedStates = JSON.parse(localStorage.getItem("checkboxStates"));
      if (savedStates) {
        for (let i = 1; i <= TOTAL_BOXES; i++) {
          document.getElementById("check" + i).checked = savedStates[i - 1];
        }
      }
    }

    window.onload = function () {
      createCheckboxes();
      loadrem();
    };
    return(
        <>
        <section className="Projects" id="Projects">
        <h1>Projects</h1>
        <div class="cards row row-cols-1 row-cols-md-2 g-4">
 <a href="../to_do_list.html"className="flip">
  <div className="inner">
    <div className="img">
      <img src={`${process.env.PUBLIC_URL}/Thoughtful Quotes to Comfort Anyone Who's Lost Their Mom.jpg`} alt="to do list "></img>
    </div>
    <div className="back">
<h2>My TO DO LIST </h2>
<p>
  here you will find my daily tasks that i should complete 
</p>
    </div>
  </div>
</a>
<a href="/"className="flip">
  <div className="inner">
    <div className="img">
      <img src={`${process.env.PUBLIC_URL}/Forget Not.jpg`} alt="reminder"></img>
    </div>
    <div className="back">
      
    </div>
  </div>
   <div className="mini-page">
      <h5>medicine Reminder</h5>
      <div id="rem"></div>
    </div>
  </a>
<a href="/" class="flip">
  <div className="inner">
    <div className="img">
      <img src={`${process.env.PUBLIC_URL}/Chinese language course in dhaka _ SHIELD LANGUAGE ACADEMY DHAKA.jpg`} alt="HSK learning journy"></img>
    </div>
    <div className="back">
      <h2>HSK 1+2+3</h2>
      <p> HERE you will find my journy learning Chinese language "Coming Soon"</p>
    </div>
  </div>
  </a>
<a href="/"className="flip">
  <div className="inner">
    <div className="img">
      <img src={`${process.env.PUBLIC_URL}/Wishlist board cover.jpg`} alt=" Wishlist "></img>
    </div>
    <div className="back">
      <h2>Lara's 2025,2026 Wishlist</h2>
      <p> My Wishlist for this year and the next one as well "Coming Soon"</p>

    </div>
  </div>
</a>
<a href="../capstone-project-create-portfolio/portfolio.html" className="flip">
  <div className="inner">
    <div className="img">
      <img src={`${process.env.PUBLIC_URL}/Portfolio Cover1.png`} alt="portfolio"></img>
    </div>
    <div className="back">
      <h2> Portfolio</h2>
      <p> Lara's Portfolio</p>
    </div>
  </div>
</a>
<a href="/" class="flip">
  <div className="inner">
    <div className="img">
      <img src= {`${process.env.PUBLIC_URL}/download (3).jpg`} alt="diary book "></img>
    </div>
    <div className="back">
      <h2> Diary </h2>
      <p> My little diary for My inner thoughts "Coming Soon"</p>

    </div>
  </div>
</a>
</div>
</section>
        </>
    )
}
export default Projects;
