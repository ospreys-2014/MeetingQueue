class CreateParticipants < ActiveRecord::Migration
  def change
    create_table :participants do |t|
      t.string :name
      t.boolean :q_status, default: false
      t.references :meeting
      t.timestamps
    end
  end
end
