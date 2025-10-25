# Image Comparison Slider Plugin for Jekyll
#
# Usage in markdown:
# {% compare_images image1.jpg | image2.jpg %}
# or
# {% compare_images /path/to/image1.jpg | /path/to/image2.jpg | 600 %}
#
# The third parameter (optional) is the height in pixels

module Jekyll
  class CompareImagesTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    def render(context)
      # Parse the input: image1 | image2 | optional_height
      parts = @text.split('|').map(&:strip)

      if parts.length < 2
        return "<p style='color: red;'>Error: compare_images requires at least 2 images separated by |</p>"
      end

      # Process Liquid variables in the paths
      image1 = Liquid::Template.parse(parts[0]).render(context)
      image2 = Liquid::Template.parse(parts[1]).render(context)
      height = parts[2] || "auto"

      # Build the HTML
      html = <<~HTML
        <div class="img-comp-container" style="height: #{height == "auto" ? "auto" : height + "px"};">
          <div class="img-comp-img">
            <img src="#{image1}" alt="Before comparison">
          </div>
          <div class="img-comp-img img-comp-overlay">
            <img src="#{image2}" alt="After comparison">
          </div>
        </div>
      HTML

      html
    end
  end
end

Liquid::Template.register_tag('compare_images', Jekyll::CompareImagesTag)
