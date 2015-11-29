class AddShapeNumToShapes < ActiveRecord::Migration
  def change
    add_column :shapes, :shape_num, :integer
  end
end
