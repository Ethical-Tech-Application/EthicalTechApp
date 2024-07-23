//these variables connect our code with the 'id' on the html
//we can then manipulate the variables and it will manipulate the html
let images = document.getElementById("images"); 
let text = document.getElementById("text"); 
let buttonBox = document.getElementById('buttonBox');
let input = document.getElementById('input');
//this is the variable for the name of the character
let character;
//score
let totPts = 0;

let addPt = function(pt = 0)
{
  totPts += pt;
};

//this is how after we type in the character name and hit enter
//we will add the name to the variable, remove the input box and start our first scenario
input.onkeypress = function(event)
{
  console.log(input.value);
  if(event.key == "Enter" || event.keyCode == 13)
  {
    character =  input.value;
    input.parentNode.removeChild(input);
    advanceTo(scenario.zero);
  }
};

//this changes the text and puts in your characters name
let changeText = function(words)
{
  text.innerHTML = words.replace("Your character", character);
};

//this takes the image link and puts it in the proper format, sending it to the html
let changeImage = function(img)
{
  images.style.backgroundImage = "url(" + img + ")";
};

//this looks at the number of options we have set and creates enough buttons 
let changeButtons = function(buttonList)
{
  buttonBox.innerHTML = "";
  for(let i = 0; i < buttonList.length; i++) 
  {
    buttonBox.innerHTML += "<button onClick=" + buttonList[i][1] + ">" + buttonList[i][0] + "</button>";
  };
};

//this is what moves the game along
let advanceTo = function(scenario)
{
  changeImage(scenario.image);
  changeText(scenario.text);
  changeButtons(scenario.buttons);
  addPt(scenario.ptsAdded);
  //alert(totPts);
};

//this is the object that holds each scenario, the more you add the more options there are
//scenario = {}
let scenario =
{
  start:
  {
    image: "./img/ETG.png", //Ethical Tech image
    text: "This is an ethical technology text-based game with interactive experience where players are presented with scenarios and dilemmas related to the ethical considerations and implications of technology development and use. The game involves making choices that impact various stakeholders, such as users, society, and the environment, and encourages players to reflect on the consequences of their decisions.<br><br> What is your name?\n",
  },
  zero:
  {
    image: "./img/AInew.jpg", //image of TechGuard Company
    text: "Your character is a bright young software developer who recently joined Ethical Tech Guard, a leading technology company known for its cutting-edge innovations. As you navigate your career, you are faced with numerous ethical dilemmas that will test your values and shape the future of technology.<br><br> What do you want to do?",
    buttons: [["Proceed to Scenario", "advanceTo(scenario.sen1)"],["Character Interaction", ""]],
  },

  sen1:
  {
    image: "./img/socialMedia.jpg", //image of TechGuard Team
    text: "Your team is developing a new social media app that requires collecting user data to improve personalization.<br><br> Choice A: Implement robust data privacy measures, ensuring users have control over their data and transparency about its use.<br><br> Choice B: Collect extensive data without explicit user consent to accelerate development and gain competitive advantage. ",
    buttons: [["Choice A", "advanceTo(scenario.A11)"],["Choice B", "advanceTo(scenario.B11)"]]
  },
    A11: // A
    {
      ptsAdded: 1,
      image: "#",
      text: "As you implement these measures, you encounter a bug that delays the project further.<br><br> Path 1: Inform your team and work overtime to fix the bug.<br><br> Path 2:  Ignore the bug for now, planning to fix it post-launch.",
      buttons: [["Path 1", "advanceTo(scenario.A111)"],["Path 2", "advanceTo(scenario.A12)"]]
    },
      A111: // A.1 Correct
      {
        ptsAdded: 1,
        image: "#",
        text: "+",
        buttons: [["Proceed", "advanceTo(scenario.A12)"]]
      },
    A12:
    {
      image: "#",
      text: "User feedback suggests that the privacy measures are too cumbersome, impacting user experience.<br><br> Path 1: Simplify the measures while maintaining core privacy features.<br><br> Path 2: Stick with the current plan, prioritizing privacy over convenience.",
      buttons: [["Path 1", "advanceTo(scenario.sen2)"],["Path 2", "advanceTo(scenario.A112)"]]
    },
      A122: // A.2 Correct
      {
        ptsAdded: 1,
        image: "#",
        text: "+",
        buttons: [["Proceed", "advanceTo(scenario.sen2)"]]
      },
    B11: // B
    {
      image: "#",
      text: "As you implement these measures, you encounter a bug that delays the project further.<br><br> Path 1: Inform your team and work overtime to fix the bug.<br><br> Path 2:  Ignore the bug for now, planning to fix it post-launch.",
      buttons: [["Path 1", "advanceTo(scenario.B12)"],["Path 2", "advanceTo(scenario.B112)"]]
    },
      B112: // B.1 Correct
      {
        ptsAdded: 1,
        image: "#",
        text: "+",
        buttons: [["Proceed", "advanceTo(scenario.A12)"]]
      },
    B12:
    {
      image: "#",
      text: "User feedback suggests that the privacy measures are too cumbersome, impacting user experience.<br><br> Path 1: Simplify the measures while maintaining core privacy features.<br><br> Path 2: Stick with the current plan, prioritizing privacy over convenience.",
      buttons: [["Path 1", "advanceTo(scenario.121)"],["Path 2", "advanceTo(scenario.sen2)"]]
    },
      B121: // B.2 Correct
      {
        ptsAdded: 1,
        image: "#",
        text: "+",
        buttons: [["Proceed", "advanceTo(scenario.sen2)"]]
      },









  reflection:
  {
    image: "#",
    text: "Reflections and Learnings:<br><br> Ethical Use of Data: <br> Reflection: Consider the ethical implications of collecting extensive personal data from users without explicit consent or understanding. <br> Learning: Understand the importance of transparency and informed consent in data collection practices. Discuss how companies should balance their business interests with user privacy rights. <br><br> Impact on Society: <br> Reflection: Consider the broader societal impacts of extensive data collection and targeted advertising, including implications for democracy, polarization, and social cohesion.  <br><br> Learning: Discuss the role of social media platforms in shaping public discourse and the ethical considerations of influencing user behavior through targeted content and ads.",
    buttons: [["continue", "advanceTo(scenario.zero)"]]
  }
};

//this is the code that starts the game
advanceTo(scenario.start);