get '/' do
  erb :'meeting/index'
end

get '/meeting/new' do
  erb :'meeting/_meetingform'
end

post '/meeting/new' do
  @meeting = Meeting.create(params[:meeting])
  @participant = Participant.create(params[:participant])
  @participant.meeting_id = @meeting.id
  @participant.save

  redirect to "/meeting/#{@meeting.id}"
end

get '/meeting/:id' do |id|
  @meeting = Meeting.find(id)
  @participants = @meeting.participants

  @queue = @participants.where(q_status: true).order(:updated_at)

  erb :'/meeting/queue'
end

put '/participant/:id' do |id|
  participant = Participant.find(id)
  participant.update(params[:participant])
  participant.to_json
end

