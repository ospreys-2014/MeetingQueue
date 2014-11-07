def add_participants(meeting, participants)
  participants.each do |participant|
    if Participant.all.where(name: participant).exists?
      meeting.participants << Participant.find_by(name: participant)
    else
      meeting.participants << Participant.create(name: participant)
    end
  end
end
