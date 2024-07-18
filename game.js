//these variables connect our code with the 'id' on the html
//we can then manipulate the variables and it will manipulate the html
let images = document.getElementById("images"); 
let text = document.getElementById("text"); 
let buttonBox = document.getElementById('buttonBox');
let input = document.getElementById('input');
//this is the variable for the name of the character
let character;



//this is how after we type in the character name and hit enter
//we will add the name to the variable, remove the input box and start our first scenario
input.onkeypress = function(event) {
  console.log(input.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    character =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
  }
};


//this changes the text and puts in your characters name
let changeText = function(words) {
  text.innerHTML = words.replace("Your character", character);
};

//this takes the image link and puts it in the proper format, sending it to the html
let changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};


//this looks at the number of options we have set and creates enough buttons 
let changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (let i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

//this is what moves the game along
let advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};






//this is the object that holds each scenario, the more you add the more options there are
//scenario = {}
let scenario = {
  one: {
    image: "./img/ETG.png", //Ethical Tech image
    text: "This is an ethical technology text-based game with interactive experience where players are presented with scenarios and dilemmas related to the ethical considerations and implications of technology development and use. The game involves making choices that impact various stakeholders, such as users, society, and the environment, and encourages players to reflect on the consequences of their decisions.<br><br> What is your name?\n",
  },
  two: {
    image: "./img/AInew.jpg", //image of TechGuard Company
    text: "Your character is a bright young software developer who recently joined Ethical Tech Guard, a leading technology company known for its cutting-edge innovations. As you navigate your career, you are faced with numerous ethical dilemmas that will test your values and shape the future of technology.<br><br> What do you want to do?",
    buttons: [["Proceed to Scenario", "advanceTo(scenario.three)"],["Character Interaction", "advanceTo(scenario.twelve)"]]
    },
  three: {
        image: "./img/socialMedia.jpg", //image of TechGuard Team
      text: "Your team is developing a new social media app that requires collecting user data to improve personalization.<br> You are faced with 2 choices:<br><br> Choice A: Implement robust data privacy measures, ensuring users have control over their data and transparency about its use.<br><br> Choice B: Collect extensive data without explicit user consent to accelerate development and gain competitive advantage. ",
        
        buttons: [["Choice A", "advanceTo(scenario.four)"],["Choice B", "advanceTo(scenario.six)"]]
    },
   four: {
        image: "#",//image of consequence
        text: "Consequence: Slower development process, but users trust and appreciate the app, leading to long-term success. And now you are faced with more decisions: <br><br> As you implement these measures, you encounter a bug that delays the project further. Do you: <br><br> Option A: Inform your team and work overtime to fix the bug. <br><br> Option B: Ignore the bug for now, planning to fix it post-launch.",
        buttons: [["Option A", "advanceTo(scenario.eight)"],["Option B", "advanceTo(scenario.five)"]]
      },
   five: {
        image: "#",
        text: "User feedback suggests that the privacy measures are too cumbersome, impacting user experience.Do you: <br><br> Option 1: Simplify the measures while maintaining core privacy features. <br><br> Option 2:  Stick with the current plan, prioritizing privacy over convenience. ",
        buttons: [["Option 1", "advanceTo(scenario.eight)"],["Option 2", "advanceTo(scenario.nine)"]]
    },
   
    six: {
        image: "#",//image of consequence (lack of transparency)
        text: "Consequence: Faster development and short-term success, but potential backlash and legal issues as users discover the lack of transparency. <br>A whistleblower within the company threatens to go public with the unethical data practices. Do you: <br><br> Option A: Attempt to silence the whistleblower through a legal agreement. <br><br> Option B: Address the issue openly and commit to changing your data practices. ",
        buttons: [["Option A", "advanceTo(scenario.seven)"],["Option B", "advanceTo(scenario.seven)"]]
      },
        seven: {
        image: "#",
        text: "An influential tech journalist discovers your data practices and contacts you for a statement. Do you: <br><br> Option 1: Provide a transparent response and outline your plans for change.<br><br> Option 2: Deflect the questions and try to control the narrative. ",
        buttons: [["Option 1", "advanceTo(scenario.eight)"],["Option 2", "advanceTo(scenario.nine)"]]
      },
        eight: {
        image: "#",
            text: "Users appreciate the high level of privacy protection. The app gains a reputation for respecting user data, leading to increased trust and user retention.",
        buttons: [["continue", "advanceTo(scenario.ten)"]]
    
      },
 nine: {
        image: "#",
        text: "Users discover hidden data collection practices, resulting in outrage and legal challenges. The app faces lawsuits and regulatory scrutiny.",
        buttons: [["continue", "advanceTo(scenario.fifteen)"]]
      },
 ten: {
    image: "#",
    text: "Ethical Tech Guard is developing an algorithm to increase user engagement on a new social media platform. You discover it is promoting divisive and inflammatory content. <br><br> Choice A: Redesign the algorithm to prioritize balanced and factual content.<br><br> Choice B: Maintain the current algorithm to maximize engagement. ",
    buttons: [["Choice A", "advanceTo(scenario.eleven)"],["Choice B", "advanceTo(scenario.thirteen)"]]
  },
    eleven: {
    image: "#",
    text: "Consequence: Reduced engagement metrics, but a healthier online environment. Which path will you take? <br><br> Path A: Users initially react negatively to the less sensational content.<br>Educate users about the benefits of balanced content.<br><br>Path B: Advertisers pull back due to lower engagement.<br> Seek new advertisers who value ethical practices.  ",
    buttons: [["Path A", "advanceTo(scenario.eleven)"],["Path B", "advanceTo(scenario.eleven)"]]
  },
    twelve: {
    image: "#",
    text: "TO BE CONTINUED...",
    buttons: [["continue", "advanceTo(scenario.two)"]]

    },
    thirteen: {
        image: "#",
        text: "TO BE CONTINUED...",
        buttons: [["continue", "advanceTo(scenario.two)"]]
    
    },
    fourteen: {
        image: "#",
        text: "TO BE CONTINUED...",
        buttons: [["continue", "advanceTo(scenario.two)"]]
    
    },
    fifteen: {
        image: "#",
        text: "Reflections and Learnings:<br><br> Ethical Use of Data: <br> Reflection: Consider the ethical implications of collecting extensive personal data from users without explicit consent or understanding. <br> Learning: Understand the importance of transparency and informed consent in data collection practices. Discuss how companies should balance their business interests with user privacy rights. <br><br> Impact on Society: <br> Reflection: Consider the broader societal impacts of extensive data collection and targeted advertising, including implications for democracy, polarization, and social cohesion.  <br><br> Learning: Discuss the role of social media platforms in shaping public discourse and the ethical considerations of influencing user behavior through targeted content and ads.",
        buttons: [["continue", "advanceTo(scenario.two)"]]
    
      },
  
};


//this is the code that starts the game
advanceTo(scenario.one);