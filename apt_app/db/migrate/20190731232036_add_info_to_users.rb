class AddInfoToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :string
    add_column :users, :phone, :integer
    add_column :users, :hours, :string
  end
end
