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

  redirect to "/queue/#{@meeting.id}"
end

get '/queue/:id' do |id|
  @meeting = Meeting.find(id)
  @participants = Participant.where(@meeting.id)

  erb :'/meeting/tq', locals: {meeting: @meeting, participant: @particpants}
end
