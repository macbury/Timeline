module ApplicationHelper
  def faye_meta(path, name)
    tag :meta, :channel => path, :content => Faye.make(path), :name => name
  end

end
