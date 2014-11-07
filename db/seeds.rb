strawberries = Meeting.create(title:"Picking Strawberries",description:"Pick 'em when they're ripe!")

mark = Participant.create(name:"Mark")
james = Participant.create(name:"James")
steph = Participant.create(name:"Steph")
becca = Participant.create(name:"Becca")

strawberries.participants.push(mark,james,steph,becca)
