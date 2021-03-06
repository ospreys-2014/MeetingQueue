get '/' do
  erb :'meeting/index'
end

get '/meeting/new' do
  erb :'meeting/_meetingform', layout: false
end

post '/meeting/new' do
  @meeting = Meeting.create(params[:meeting])
  @participants  = params[:participant].split(',')
  add_participants(@meeting, @participants)

  redirect to "/meeting/#{@meeting.id}"
end

get '/meeting/:id' do |id|
  @meeting = Meeting.find(id)
  @participants = @meeting.participants.order(:created_at)
  @queue = @participants.where(q_status: true).sort_by(&:updated_at)

  erb :'/meeting/queue'
end

put '/participant/:id' do |id|
  participant = Participant.find(id)
  participant.update(params[:participant])
  participant.to_json
end


# Test Test Test

