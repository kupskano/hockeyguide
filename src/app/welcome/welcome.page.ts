import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  hockeyrules = [
    {
      "id": 1,
      "title": "BASIC FIELD HOCKEY RULES",
      "rule1": "players can only hit the ball with the flat side of their stick.",
      "rule2": "players are not allowed to use their feet, or any other parts of the body, control the ball at any time.",
      "rule3": "A goal can only be scored either from a field goal, a penalty corner, or from a penalty stroke.",
      "rule4": "Hockey players may not trip, push, charge, interfere with, or physically handle an opponent in any way. ",
      "ImageUrl": "/assets/icon/hockey_edit.gif"
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  guide_details_rules(hockeyrule) {
    this.router.navigate(['/guide-details', {
        "id": hockeyrule.id,
        "title": hockeyrule.title,
        "rule1": hockeyrule.rule1,
        "rule2": hockeyrule.rule2,
        "rule3": hockeyrule.rule3,
        "rule4": hockeyrule.rule4,
        "ImageUrl": hockeyrule.ImageUrl
    }
  ])
  }

  typeheredetails(typehere) {
    this.router.navigate(['/typehere-details', {
        "id": typehere.id,
        "title": typehere.title,
        "tag1": typehere.tag1,
        "tag2": typehere.tag2,
        "tag3": typehere.tag3,
        "tag4": typehere.tag4,
        "tag5": typehere.tag5,
        "tag6": typehere.tag6,
        "tag7": typehere.tag7
    }
  ])
    console.log(typehere)
  }
 
  typeheres = [
    {
      "id": 1,
      "title": "FoulS in field hockey",
      "tag1": " Third-party obstruction. This is awarded when a hockey player positions themselves between the ball and an opponent, allowing a team-mate an unobstructed play on the ball.",
      "tag2": "Obstruction. awarded against a hockey player who uses their body or stick to prevent an opponent from reaching the ball.",
      "tag3": "Advancing. awarded against a player who shoves, pushes, or advances the ball in any way, using any part of their body.",
      "tag4": "Backsticks. awarded against a player who strikes the ball with the rounded back of the hockey stick.",
      "tag5": "Hockey stick interference. awarded against a player who uses their stick to hit an opponent’s stick, either intentionally or unintentionally.",
      "tag6": "Undercutting. awarded against a player who lifts the ball in a dangerous manner.",
      "tag7": "Sticks. awarded against a player who raises their stick dangerously near another player."
    },
    {
      "id":2,
      "title": "Types of punishment in field hockey",
      "tag1": "Free hit. free play awarded on any offenses that occurs outside of the scoring circle. It usually takes place at the location of the violation.",
      "tag2": "players must stand at least 5 yards (4.6m) from where the hit is to be taken.",
      "tag3": "Penalty corner. awarded to the attacking team when the defense either commits a foul inside the striking circle or intentionally hits the ball out-of-bounds over the end line. A penalty corner is taken by an attacking player at a spot on the end-line 10 yards (9.2m) away from the nearest goal post.",
      "tag4": "attackers must stand outside the striking circle, while five defenders, including the goalkeeper, stand behind the end line until contact is made with the ball.",
      "tag5": "all players can rush into the circle to either defend or shoot the ball at the goal.",
      "tag6": "Penalty stroke. awarded to the attacking side when an offense is committed by the defending side which is deemed to have prevented an almost certain goal.",
      "tag7": "A penalty is taken 7 yards (6.4m) from goal, with the player having only the goalkeeper to beat."
    },
    {
      "id":3,
      "title": "Field hockey umpires",
      "tag1": "There are two umpires on the hockey field, who are usually responsible for each half of the pitch.",
      "tag2": " A player who breaches the rules, either by rough or dangerous play, misconduct, or an intentional offenses, can be shown a card — either green, yellow or red",
      "tag3": "Green. This is an official warning given to the hockey player to not break the rules.",
      "tag4": "Yellow. This results in a hockey player being sent off the pitch for 5 minutes, following an offense.",
      "tag5": "Red. The red card results in an early shower and is given for more serious offense.",
      "tag6": "Unavailable Data",
      "tag7": "Unavailable Data"
    }
  ]


  filterProductData(event: any) {
    this.typeheres = [
      {
        "id": 1,
        "title": "FoulS in field hockey",
        "tag1": " Third-party obstruction. This is awarded when a hockey player positions themselves between the ball and an opponent, allowing a team-mate an unobstructed play on the ball.",
        "tag2": "Obstruction. awarded against a hockey player who uses their body or stick to prevent an opponent from reaching the ball.",
        "tag3": "Advancing. awarded against a player who shoves, pushes, or advances the ball in any way, using any part of their body.",
        "tag4": "Backsticks. awarded against a player who strikes the ball with the rounded back of the hockey stick.",
        "tag5": "Hockey stick interference. awarded against a player who uses their stick to hit an opponent’s stick, either intentionally or unintentionally.",
        "tag6": "Undercutting. awarded against a player who lifts the ball in a dangerous manner.",
        "tag7": "Sticks. awarded against a player who raises their stick dangerously near another player."
      },
      {
        "id":2,
        "title": "Types of punishment in field hockey",
        "tag1": "Free hit. free play awarded on any offenses that occurs outside of the scoring circle. It usually takes place at the location of the violation.",
        "tag2": "players must stand at least 5 yards (4.6m) from where the hit is to be taken.",
        "tag3": "Penalty corner. awarded to the attacking team when the defense either commits a foul inside the striking circle or intentionally hits the ball out-of-bounds over the end line. A penalty corner is taken by an attacking player at a spot on the end-line 10 yards (9.2m) away from the nearest goal post.",
        "tag4": "attackers must stand outside the striking circle, while five defenders, including the goalkeeper, stand behind the end line until contact is made with the ball.",
        "tag5": "all players can rush into the circle to either defend or shoot the ball at the goal.",
        "tag6": "Penalty stroke. awarded to the attacking side when an offense is committed by the defending side which is deemed to have prevented an almost certain goal.",
        "tag7": "A penalty is taken 7 yards (6.4m) from goal, with the player having only the goalkeeper to beat."
      },
      {
        "id":3,
        "title": "Field hockey umpires",
        "tag1": "There are two umpires on the hockey field, who are usually responsible for each half of the pitch.",
        "tag2": " A player who breaches the rules, either by rough or dangerous play, misconduct, or an intentional offenses, can be shown a card — either green, yellow or red",
        "tag3": "Green. This is an official warning given to the hockey player to not break the rules.",
        "tag4": "Yellow. This results in a hockey player being sent off the pitch for 5 minutes, following an offense.",
        "tag5": "Red. The red card results in an early shower and is given for more serious offense.",
        "tag6": "Unavailable Data",
        "tag7": "Unavailable Data"
      }
    ]

      const val = event.target.value;
      if(val && val.trim() !== '') {
        this.typeheres = this.typeheres.filter((typehere) => {
          return (typehere.title.toLowerCase().indexOf(val.toLowerCase()) >-1);
        })
      }


  }





}
