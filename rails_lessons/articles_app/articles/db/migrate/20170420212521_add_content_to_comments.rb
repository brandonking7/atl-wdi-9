class AddContentToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :opinion, :text
    add_column :comments, :article_id, :integer
  end
end
