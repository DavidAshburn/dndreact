class LabelsController < ApplicationController
  def races
    @races = Race.all.map {|race| [race.name, race.subraces.map { |subrace| subrace.name } ] };
    respond_to do |format|
      format.json { render json: @races}
    end
  end

  def classes
    @pclasses = PlayerClass.all.map { |pclass|  [pclass.name, pclass.subclasses.map { |subclass| subclass.name } ] };
    respond_to do |format|
      format.json { render json: @pclasses}
    end
  end

  def backgrounds
    @bgrounds = Background.all.map { |bground| bground.name }
    respond_to do |format|
      format.json { render json: @bgrounds}
    end
  end

end
