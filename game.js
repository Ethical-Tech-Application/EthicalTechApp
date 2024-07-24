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

let getScore = function()
{
  if(totPts >= 38)
  {
    return "with a score of " + totPts + " out of 42, you did amazingly great! 🤯";
  }
  else if(38 > totPts > 28)
  {
    return "with a score of " + totPts + " out of 42, you did alright! 👍";
  }
  else if(28 >= totPts)
  {
    return "with a score of " + totPts + " out of 42, you did pretty bad! 💀";
  }
}

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
      text: "Consequence: Slower development process, but users trust and appreciate the app, leading to long-term success.<br>As you implement these measures, you encounter a bug that delays the project further.<br><br> Path 1: Inform your team and work overtime to fix the bug.<br><br> Path 2:  Ignore the bug for now, planning to fix it post-launch.",
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
      text: "Faster development and short-term success, but potential backlash and legal issues as users discover the lack of transparency.<br> A whistleblower within the company threatens to go public with the unethical data practices.<br><br> Path 1: Attempt to silence the whistleblower through a legal agreement.<br><br> Path 2: Address the issue openly and commit to changing your data practices.",
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
      text: "An influential tech journalist discovers your data practices and contacts you for a statement. <br><br> Path 1: Provide a transparent response and outline your plans for change.<br><br> Path 2: Deflect the questions and try to control the narrative.",
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
    text: "Congratulations! You've made it to the end. Now, your overall rating based on your choices will be displayed<br><br> " + getScore(),
    buttons: [["The End", ""]]
  }
};

//this is the code that starts the game
advanceTo(scenario.start);