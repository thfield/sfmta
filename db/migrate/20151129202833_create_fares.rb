class CreateFares < ActiveRecord::Migration
  def change
    create_table :fares do |t|
      t.decimal :price
      t.string :currency_type
      t.integer :payment_method
      t.integer :transfers
      t.integer :transfer_duration

      t.timestamps null: false
    end
  end
end
