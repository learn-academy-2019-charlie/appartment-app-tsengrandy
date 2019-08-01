class Apartment < ActiveRecord::Migration[5.0]
  def change
    create_table :apartments do |t|
      t.integer :apt_num
      t.string :street
      t.string :city
      t.integer :zip
      t.string :state
      t.string :country
      t.integer :user_id
    end
  end
end
