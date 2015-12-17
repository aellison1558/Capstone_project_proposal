class Api::ImagesController < ApplicationController
  def create
    @image = Image.new(image_params)
    @parent = @image.imageable
    if @image.save
      if @parent.is_a?(Project)
        render :project
      else
        render :user
      end
    else
      @errors = @image.errors.full_messages
      render json: @errors
    end
  end

  def destroy
    @image = Image.find(params[:id])
    @image.destroy
    @parent = @image.imageable

    if @parent.is_a?(Project)
      render :project
    else
      render :user
    end
  end

  private
  def image_params
    params.require('image').permit(:imageable_id, :imageable_type, :image_public_id)
  end
end
