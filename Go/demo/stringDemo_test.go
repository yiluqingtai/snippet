package demo

import (
	"github.com/smartystreets/goconvey/convey"
	"testing"
)

func TestSplice(t *testing.T) {
	convey.Convey("test", t, func() {
		convey.So(Splice1("basket", "ball"), convey.ShouldEqual, "basketball")
		convey.So(Splice2("basket", "ball"), convey.ShouldEqual, "basketball")
		convey.So(Splice3("basket", "ball"), convey.ShouldEqual, "basketball")
		convey.So(Splice4("basket", "ball"), convey.ShouldEqual, "basketball")
		convey.So(Splice5("basket", "ball"), convey.ShouldEqual, "basketball")
	})
}
