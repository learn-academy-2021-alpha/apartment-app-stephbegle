class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :street
      t.string :city
      t.string :state
      t.string :manager
      t.string :email
      t.string :price
      t.integer :bathrooms 
      t.integer :bedrooms
      t.string :pets
      t.integer :user_id

      t.timestamps
    end
  end
end
