class UsersController < ApplicationController
  def edit
    @user =User.find(params[:id])
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def index
    @users = User.order('id ASC')

  end

  def search
    @products = Product.where('name LIKE(?)',"%#{params[:keyword]}%")
    respind_to do |format|
      format.html
      fotmat.json
  end
  
  private
  def user_params
    params.require(:user).permit(:name,:email)
    respind_to do |format|
        format.html
        format.json
  end
end
