# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151201223505) do

  create_table "fare_routes", force: :cascade do |t|
    t.integer  "fare_id"
    t.integer  "route_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "fare_routes", ["fare_id"], name: "index_fare_routes_on_fare_id"
  add_index "fare_routes", ["route_id"], name: "index_fare_routes_on_route_id"

  create_table "fares", force: :cascade do |t|
    t.decimal  "price"
    t.string   "currency_type"
    t.integer  "payment_method"
    t.integer  "transfers"
    t.integer  "transfer_duration"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "fares", ["id"], name: "index_fares_on_id"

  create_table "routes", force: :cascade do |t|
    t.string   "route_short_name"
    t.string   "route_long_name"
    t.integer  "route_type"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "routes", ["id"], name: "index_routes_on_id"

  create_table "services", force: :cascade do |t|
    t.boolean  "monday"
    t.boolean  "tuesday"
    t.boolean  "wednesday"
    t.boolean  "thursday"
    t.boolean  "friday"
    t.boolean  "saturday"
    t.boolean  "sunday"
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "services", ["id"], name: "index_services_on_id"

  create_table "shapes", force: :cascade do |t|
    t.decimal  "shape_pt_lon"
    t.decimal  "shape_pt_lat"
    t.integer  "shape_pt_sequence"
    t.integer  "shape_dist_traveled"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.integer  "shape_num"
  end

  add_index "shapes", ["shape_num"], name: "index_shapes_on_shape_num"

  create_table "stop_times", force: :cascade do |t|
    t.integer  "trip_id"
    t.datetime "arrival_time"
    t.datetime "departure_time"
    t.integer  "stop_sequence"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "stop_id"
  end

  add_index "stop_times", ["arrival_time"], name: "index_stop_times_on_arrival_time"
  add_index "stop_times", ["id"], name: "index_stop_times_on_id"
  add_index "stop_times", ["stop_id"], name: "index_stop_times_on_stop_id"

  create_table "stops", force: :cascade do |t|
    t.string   "stop_name"
    t.decimal  "stop_lat"
    t.decimal  "stop_lon"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "stops", ["id"], name: "index_stops_on_id"

  create_table "trips", force: :cascade do |t|
    t.integer  "route_id"
    t.integer  "service_id"
    t.string   "trip_headsign"
    t.integer  "direction_id"
    t.integer  "block_id"
    t.integer  "shape_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "trips", ["id"], name: "index_trips_on_id"
  add_index "trips", ["route_id"], name: "index_trips_on_route_id"
  add_index "trips", ["shape_id"], name: "index_trips_on_shape_id"

end
