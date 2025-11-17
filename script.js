function switchTheme() {
  if (!document.body.classList.contains("bg-dark"))
  {
  document.body.classList.add('bg-dark')

  const navbar = document.getElementById('navbar')
  const cards = document.querySelectorAll('.card')
  const tables =  document.querySelectorAll('.table')
  const cardColums = document.querySelectorAll(".column")
  const footerText = document.querySelector(".navbar-text")
  const h1Title = document.getElementById("h1_title")
  const sw = document.getElementById("themeSwitch")
  

  navbar.classList.remove('navbar-light', 'bg-light')
  navbar.classList.add('navbar-dark', 'bg-dark')
 

  cards.forEach(card => {
    card.classList.add("text-white", "bg-dark", "border-light")
  })

  tables.forEach(table => {
    table.classList.add("table-dark")
  })

  cardColums.forEach(card => {
    card.classList.remove("col");
    card.classList.add("col-12");
  })

    footerText.style.paddingLeft = '1000px';
    footerText.style.display = 'block';
    footerText.classList.add('text-white');

    
    h1Title.innerHTML = "This is the Dark theme";
    h1Title.classList.add('text-white');

    sw.innerHTML = "Activate Light Theme";
  }

  else if(document.body.classList.contains("bg-dark"))
{
  document.body.classList.remove('bg-dark')

  const navbar = document.getElementById('navbar')
  const cards = document.querySelectorAll('.card')
  const tables =  document.querySelectorAll('.table')
  const cardColums = document.querySelectorAll(".column")
  const footerText = document.querySelector(".navbar-text")
  const h1Title = document.getElementById("h1_title")
  const sw = document.getElementById("themeSwitch")

  navbar.classList.add('navbar-light', 'bg-light')
  navbar.classList.remove('navbar-dark', 'bg-dark')
 

  cards.forEach(card => {
    card.classList.remove("text-white", "bg-dark", "border-light")
  })

  tables.forEach(table => {
    table.classList.remove("table-dark")
  })

  cardColums.forEach(card => {
    card.classList.add("col");
    card.classList.remove("col-12");
  })

    footerText.style.paddingLeft = '100px';
    footerText.style.display = 'block';
    footerText.classList.remove('text-white');

    
    h1Title.innerHTML = "This is the Light theme";
    h1Title.classList.remove('text-white');

    sw.innerHTML = "Activate Dark Theme";
}

}