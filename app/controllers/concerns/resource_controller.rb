module ResourceController
  extend ActiveSupport::Concern

  included do
    class_attribute :resource_class
    attr_writer :resource
  end

  def index
    render json: resource_class.all
  end

  def show
    render json: resource
  end

  def create
    self.resource = resource_class.new permitted_params

    handle_resource_action do
      resource.save
    end
  end

  def update
    handle_resource_action do
      resource.update permitted_params
    end
  end

  def destroy
    handle_resource_action do
      resource.destroy
    end
  end

  private

  def handle_resource_action
    if yield
      render json: resource
    else
      render json: resource, methods: :errors, status: :unprocessable_entity
    end
  end

  def permitted_params
    raise NotImplementedError
  end

  def resource
    @resource ||= resource_class.find params[:id]
  end
end
