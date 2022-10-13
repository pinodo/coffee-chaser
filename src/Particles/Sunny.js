class Sunny {
  constructor(ctx) {
    this.x = window.innerWidth - 150
    this.y = 50
    this.dx = 0.2
    this.dy = 0.2
    this.radius = 210
    this.space = 70
    this.shortLength = 200
    this.longLength = 400
    this.lineWidth = 50
    this.ctx = ctx
    this.angle = Math.random() * 360
  }

  draw() {
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = '#EFE2DA'
    this.ctx.lineWidth = this.lineWidth
    this.ctx.fillStyle = '#EFE2DA'

    // Draw Sun
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)

    // this.ctx.stroke()
    // this.ctx.save()
    // this.ctx.translate(this.x, this.y)
    // this.ctx.rotate(this.angle * (Math.PI / 360))
    // const time = new Date()
    // this.ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds())

    // this.ctx.lineCap = 'round'
    // this.ctx.strokeStyle = '#EFE2DA'
    // this.ctx.lineWidth = this.lineWidth
    // this.ctx.fillStyle = '#EFE2DA'

    // Draw Light (135 Degree = 6/8 PI)
    this.ctx.moveTo(
      this.x + Math.sin(Math.PI / 4) * this.radius + Math.sin(Math.PI / 4) * this.space,
      this.y + Math.cos(Math.PI / 4) * this.radius + Math.cos(Math.PI / 4) * this.space
    )
    this.ctx.lineTo(
      this.x
              + Math.sin(Math.PI / 4) * this.radius
              + Math.sin(Math.PI / 4) * this.space
              + Math.sin(Math.PI / 4) * this.longLength,
      this.y
              + Math.cos(Math.PI / 4) * this.radius
              + Math.cos(Math.PI / 4) * this.space
              + Math.cos(Math.PI / 4) * this.longLength
    )

    // Draw Light (157.5 Degree = 7/8 PI)
    this.ctx.moveTo(
      this.x + Math.sin(Math.PI / 8) * this.radius + Math.sin(Math.PI / 8) * this.space,
      this.y + Math.cos(Math.PI / 8) * this.radius + Math.cos(Math.PI / 8) * this.space
    )
    this.ctx.lineTo(
      this.x
        + Math.sin(Math.PI / 8) * this.radius
        + Math.sin(Math.PI / 8) * this.space
        + Math.sin(Math.PI / 8) * this.shortLength,
      this.y
        + Math.cos(Math.PI / 8) * this.radius
        + Math.cos(Math.PI / 8) * this.space
        + Math.cos(Math.PI / 8) * this.shortLength
    )

    // Draw Light (180 Degree = PI)
    this.ctx.moveTo(
      this.x,
      this.y + this.radius + this.space
    )
    this.ctx.lineTo(
      this.x,
      this.y
          + this.radius
          + this.space
          + this.longLength
    )

    // Draw Light (202.5 Degree = 9/8 PI)
    this.ctx.moveTo(
      this.x - Math.sin(Math.PI / 8) * this.radius - Math.sin(Math.PI / 8) * this.space,
      this.y + Math.cos(Math.PI / 8) * this.radius + Math.cos(Math.PI / 8) * this.space
    )
    this.ctx.lineTo(
      this.x
          - Math.sin(Math.PI / 8) * this.radius
          - Math.sin(Math.PI / 8) * this.space
          - Math.sin(Math.PI / 8) * this.shortLength,
      this.y
          + Math.cos(Math.PI / 8) * this.radius
          + Math.cos(Math.PI / 8) * this.space
          + Math.cos(Math.PI / 8) * this.shortLength
    )

    // Draw Light (225 Degree = 10/8 PI)
    this.ctx.moveTo(
      this.x - Math.sin(Math.PI / 4) * this.radius - Math.sin(Math.PI / 4) * this.space,
      this.y + Math.cos(Math.PI / 4) * this.radius + Math.cos(Math.PI / 4) * this.space
    )
    this.ctx.lineTo(
      this.x
            - Math.sin(Math.PI / 4) * this.radius
            - Math.sin(Math.PI / 4) * this.space
            - Math.sin(Math.PI / 4) * this.longLength,
      this.y
            + Math.cos(Math.PI / 4) * this.radius
            + Math.cos(Math.PI / 4) * this.space
            + Math.cos(Math.PI / 4) * this.longLength
    )

    // Draw Light (247.5 Degree = 11/8 PI)
    this.ctx.moveTo(
      this.x - Math.sin(3 * (Math.PI / 8)) * this.radius - Math.sin(3 * (Math.PI / 8)) * this.space,
      this.y + Math.cos(3 * (Math.PI / 8)) * this.radius + Math.cos(3 * (Math.PI / 8)) * this.space
    )
    this.ctx.lineTo(
      this.x
            - Math.sin(3 * (Math.PI / 8)) * this.radius
            - Math.sin(3 * (Math.PI / 8)) * this.space
            - Math.sin(3 * (Math.PI / 8)) * this.shortLength,
      this.y
            + Math.cos(3 * (Math.PI / 8)) * this.radius
            + Math.cos(3 * (Math.PI / 8)) * this.space
            + Math.cos(3 * (Math.PI / 8)) * this.shortLength
    )

    // Draw Light (270 Degree = 12/8 PI)
    this.ctx.moveTo(
      this.x - this.radius - this.space,
      this.y
    )
    this.ctx.lineTo(
      this.x
            - this.radius
            - this.space
            - this.longLength,
      this.y
    )

    // Draw Light (292.5 Degree = 13/8 PI)
    this.ctx.moveTo(
      this.x - Math.sin(3 * (Math.PI / 8)) * this.radius - Math.sin(3 * (Math.PI / 8)) * this.space,
      this.y - Math.cos(3 * (Math.PI / 8)) * this.radius - Math.cos(3 * (Math.PI / 8)) * this.space
    )
    this.ctx.lineTo(
      this.x
              - Math.sin(3 * (Math.PI / 8)) * this.radius
              - Math.sin(3 * (Math.PI / 8)) * this.space
              - Math.sin(3 * (Math.PI / 8)) * this.shortLength,
      this.y
              - Math.cos(3 * (Math.PI / 8)) * this.radius
              - Math.cos(3 * (Math.PI / 8)) * this.space
              - Math.cos(3 * (Math.PI / 8)) * this.shortLength
    )

    // Draw Light (315 Degree = 14/8 PI)
    this.ctx.moveTo(
      this.x - Math.sin(Math.PI / 4) * this.radius - Math.sin(Math.PI / 4) * this.space,
      this.y - Math.cos(Math.PI / 4) * this.radius - Math.cos(Math.PI / 4) * this.space
    )
    this.ctx.lineTo(
      this.x
              - Math.sin(Math.PI / 4) * this.radius
              - Math.sin(Math.PI / 4) * this.space
              - Math.sin(Math.PI / 4) * this.longLength,
      this.y
              - Math.cos(Math.PI / 4) * this.radius
              - Math.cos(Math.PI / 4) * this.space
              - Math.cos(Math.PI / 4) * this.longLength
    )

    this.ctx.fill()
    this.ctx.stroke()
    // this.ctx.restore()
  }

  update() {
    this.angle++
    this.draw()
  }
}

export default Sunny
