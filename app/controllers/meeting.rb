get '/' do
  @participants = Participant.all
  @queue = @participants.where(q_status: true).order(:updated_at)
  p @queue
  erb :'/meeting/queue'
end

put '/participant/:id' do |id|
  participant = Participant.find(id)
  participant.update(params[:participant])
  participant.to_json
end

