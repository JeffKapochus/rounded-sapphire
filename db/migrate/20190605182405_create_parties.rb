class CreateParties < ActiveRecord::Migration[5.2]
  def change
    create_table :parties do |t|
      t.string :name
      t.integer :votes
      t.belongs_to :submission, foreign_key: true

      t.timestamps
    end
  end
end
