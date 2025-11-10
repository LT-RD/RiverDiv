// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_EPT_8rule0_eval_expression(context) {
    // "EPHEME (%)" = 0 AND "PLECO (%)" = 0 AND "TRICHO (%)" = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.properties['EPHEME (%)']  == 0) && (feature.properties['PLECO (%)']  == 0)) && (feature.properties['TRICHO (%)']  == 0));
    } else {
        return (((feature['EPHEME (%)']  == 0) && (feature['PLECO (%)']  == 0)) && (feature['TRICHO (%)']  == 0));
    }
}


function exp_EPT_8rule1_eval_expression(context) {
    // "EPHEME (%)" = 'NA' OR "PLECO (%)" = 'NA' OR "TRICHO (%)" = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.properties['EPHEME (%)']  == 'NA') || (feature.properties['PLECO (%)']  == 'NA')) || (feature.properties['TRICHO (%)']  == 'NA'));
    } else {
        return (((feature['EPHEME (%)']  == 'NA') || (feature['PLECO (%)']  == 'NA')) || (feature['TRICHO (%)']  == 'NA'));
    }
}


function exp_EPT_8rule2_eval_expression(context) {
    // "EPHEME (%)" <> 'NA' OR "PLECO (%)" <> 'NA' OR "TRICHO (%)" <> 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (((feature.properties['EPHEME (%)']  != 'NA') || (feature.properties['PLECO (%)']  != 'NA')) || (feature.properties['TRICHO (%)']  != 'NA'));
    } else {
        return (((feature['EPHEME (%)']  != 'NA') || (feature['PLECO (%)']  != 'NA')) || (feature['TRICHO (%)']  != 'NA'));
    }
}


function exp_SERI_9rule0_eval_expression(context) {
    // TAXA = 'SERI' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'SERI') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'SERI') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_SERI_9rule1_eval_expression(context) {
    // TAXA = 'SERI' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'SERI') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'SERI') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_SERI_9rule2_eval_expression(context) {
    // TAXA = 'SERI'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'SERI');
    } else {
        return (feature['TAXA']  == 'SERI');
    }
}


function exp_RHYA_10rule0_eval_expression(context) {
    // TAXA = 'RHYA' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'RHYA') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'RHYA') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_RHYA_10rule1_eval_expression(context) {
    // TAXA = 'RHYA' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'RHYA') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'RHYA') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_RHYA_10rule2_eval_expression(context) {
    // TAXA = 'RHYA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'RHYA');
    } else {
        return (feature['TAXA']  == 'RHYA');
    }
}


function exp_PSYC_11rule0_eval_expression(context) {
    // TAXA = 'PSYC' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PSYC') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'PSYC') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_PSYC_11rule1_eval_expression(context) {
    // TAXA = 'PSYC' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PSYC') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'PSYC') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_PSYC_11rule2_eval_expression(context) {
    // TAXA = 'PSYC'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'PSYC');
    } else {
        return (feature['TAXA']  == 'PSYC');
    }
}


function exp_POLY_12rule0_eval_expression(context) {
    // TAXA = 'POLY' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'POLY') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'POLY') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_POLY_12rule1_eval_expression(context) {
    // TAXA = 'POLY' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'POLY') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'POLY') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_POLY_12rule2_eval_expression(context) {
    // TAXA = 'POLY'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'POLY');
    } else {
        return (feature['TAXA']  == 'POLY');
    }
}


function exp_ODON_13rule0_eval_expression(context) {
    // TAXA = 'ODON' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ODON') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'ODON') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_ODON_13rule1_eval_expression(context) {
    // TAXA = 'ODON' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ODON') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'ODON') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_ODON_13rule2_eval_expression(context) {
    // TAXA = 'ODON'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'ODON');
    } else {
        return (feature['TAXA']  == 'ODON');
    }
}


function exp_LIMN_14rule0_eval_expression(context) {
    // TAXA = 'LIMN' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'LIMN') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'LIMN') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_LIMN_14rule1_eval_expression(context) {
    // TAXA = 'LIMN' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'LIMN') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'LIMN') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_LIMN_14rule2_eval_expression(context) {
    // TAXA = 'LIMN'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'LIMN');
    } else {
        return (feature['TAXA']  == 'LIMN');
    }
}


function exp_LEPTO_15rule0_eval_expression(context) {
    // TAXA = 'LEPTO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'LEPTO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'LEPTO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_LEPTO_15rule1_eval_expression(context) {
    // TAXA = 'LEPTO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'LEPTO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'LEPTO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_LEPTO_15rule2_eval_expression(context) {
    // TAXA = 'LEPTO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'LEPTO');
    } else {
        return (feature['TAXA']  == 'LEPTO');
    }
}


function exp_HYDRO_16rule0_eval_expression(context) {
    // TAXA = 'HYDRO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HYDRO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'HYDRO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_HYDRO_16rule1_eval_expression(context) {
    // TAXA = 'HYDRO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HYDRO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'HYDRO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_HYDRO_16rule2_eval_expression(context) {
    // TAXA = 'HYDRO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'HYDRO');
    } else {
        return (feature['TAXA']  == 'HYDRO');
    }
}


function exp_GOER_17rule0_eval_expression(context) {
    // TAXA = 'GOER' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'GOER') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'GOER') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_GOER_17rule1_eval_expression(context) {
    // TAXA = 'GOER' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'GOER') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'GOER') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_GOER_17rule2_eval_expression(context) {
    // TAXA = 'GOER'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'GOER');
    } else {
        return (feature['TAXA']  == 'GOER');
    }
}


function exp_GLOSS_18rule0_eval_expression(context) {
    // TAXA = 'GLOSS' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'GLOSS') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'GLOSS') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_GLOSS_18rule1_eval_expression(context) {
    // TAXA = 'GLOSS' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'GLOSS') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'GLOSS') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_GLOSS_18rule2_eval_expression(context) {
    // TAXA = 'GLOSS'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'GLOSS');
    } else {
        return (feature['TAXA']  == 'GLOSS');
    }
}


function exp_ECNO_19rule0_eval_expression(context) {
    // TAXA = 'ECNO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ECNO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'ECNO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_ECNO_19rule1_eval_expression(context) {
    // TAXA = 'ECNO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ECNO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'ECNO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_ECNO_19rule2_eval_expression(context) {
    // TAXA = 'ECNO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'ECNO');
    } else {
        return (feature['TAXA']  == 'ECNO');
    }
}


function exp_BRAC_20rule0_eval_expression(context) {
    // TAXA = 'BRAC' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'BRAC') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'BRAC') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_BRAC_20rule1_eval_expression(context) {
    // TAXA = 'BRAC' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'BRAC') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'BRAC') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_BRAC_20rule2_eval_expression(context) {
    // TAXA = 'BRAC'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'BRAC');
    } else {
        return (feature['TAXA']  == 'BRAC');
    }
}


function exp_BERA_21rule0_eval_expression(context) {
    // TAXA = 'BERA' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'BERA') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'BERA') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_BERA_21rule1_eval_expression(context) {
    // TAXA = 'BERA' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'BERA') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'BERA') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_BERA_21rule2_eval_expression(context) {
    // TAXA = 'BERA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'BERA');
    } else {
        return (feature['TAXA']  == 'BERA');
    }
}


function exp_PERLO_22rule0_eval_expression(context) {
    // TAXA = 'PERLO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PERLO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'PERLO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_PERLO_22rule1_eval_expression(context) {
    // TAXA = 'PERLO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PERLO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'PERLO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_PERLO_22rule2_eval_expression(context) {
    // TAXA = 'PERLO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'PERLO');
    } else {
        return (feature['TAXA']  == 'PERLO');
    }
}


function exp_NEMO_23rule0_eval_expression(context) {
    // TAXA = 'NEMO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'NEMO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'NEMO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_NEMO_23rule1_eval_expression(context) {
    // TAXA = 'NEMO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'NEMO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'NEMO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_NEMO_23rule2_eval_expression(context) {
    // TAXA = 'NEMO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'NEMO');
    } else {
        return (feature['TAXA']  == 'NEMO');
    }
}


function exp_NEMATO_24rule0_eval_expression(context) {
    // TAXA = 'NEMATO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'NEMATO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'NEMATO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_NEMATO_24rule1_eval_expression(context) {
    // TAXA = 'NEMATO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'NEMATO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'NEMATO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_NEMATO_24rule2_eval_expression(context) {
    // TAXA = 'NEMATO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'NEMATO');
    } else {
        return (feature['TAXA']  == 'NEMATO');
    }
}


function exp_LEUC_25rule0_eval_expression(context) {
    // TAXA = 'LEUC' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'LEUC') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'LEUC') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_LEUC_25rule1_eval_expression(context) {
    // TAXA = 'LEUC' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'LEUC') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'LEUC') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_LEUC_25rule2_eval_expression(context) {
    // TAXA = 'LEUC'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'LEUC');
    } else {
        return (feature['TAXA']  == 'LEUC');
    }
}


function exp_PLECOAD_26rule0_eval_expression(context) {
    // TAXA = 'PLECOAD' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PLECOAD') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'PLECOAD') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_PLECOAD_26rule1_eval_expression(context) {
    // TAXA = 'PLECOAD' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PLECOAD') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'PLECOAD') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_PLECOAD_26rule2_eval_expression(context) {
    // TAXA = 'PLECOAD'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'PLECOAD');
    } else {
        return (feature['TAXA']  == 'PLECOAD');
    }
}


function exp_GORD_27rule0_eval_expression(context) {
    // TAXA = 'GORD' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'GORD') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'GORD') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_GORD_27rule1_eval_expression(context) {
    // TAXA = 'GORD' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'GORD') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'GORD') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_GORD_27rule2_eval_expression(context) {
    // TAXA = 'GORD'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'GORD');
    } else {
        return (feature['TAXA']  == 'GORD');
    }
}


function exp_CORIXIDAE_28rule0_eval_expression(context) {
    // TAXA = 'HETERO3' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HETERO3') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'HETERO3') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_CORIXIDAE_28rule1_eval_expression(context) {
    // TAXA = 'HETERO3' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HETERO3') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'HETERO3') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_CORIXIDAE_28rule2_eval_expression(context) {
    // TAXA = 'HETERO3'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'HETERO3');
    } else {
        return (feature['TAXA']  == 'HETERO3');
    }
}


function exp_HETEROAD_29rule0_eval_expression(context) {
    // TAXA = 'HETERO1' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HETERO1') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'HETERO1') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_HETEROAD_29rule1_eval_expression(context) {
    // TAXA = 'HETERO1' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HETERO1') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'HETERO1') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_HETEROAD_29rule2_eval_expression(context) {
    // TAXA = 'HETERO1'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'HETERO1');
    } else {
        return (feature['TAXA']  == 'HETERO1');
    }
}


function exp_LYMN_30rule0_eval_expression(context) {
    // TAXA = 'LYMN' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'LYMN') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'LYMN') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_LYMN_30rule1_eval_expression(context) {
    // TAXA = 'LYMN' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'LYMN') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'LYMN') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_LYMN_30rule2_eval_expression(context) {
    // TAXA = 'LYMN'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'LYMN');
    } else {
        return (feature['TAXA']  == 'LYMN');
    }
}


function exp_PLANO_31rule0_eval_expression(context) {
    // TAXA = 'PLANO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PLANO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'PLANO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_PLANO_31rule1_eval_expression(context) {
    // TAXA = 'PLANO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PLANO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'PLANO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_PLANO_31rule2_eval_expression(context) {
    // TAXA = 'PLANO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'PLANO');
    } else {
        return (feature['TAXA']  == 'PLANO');
    }
}


function exp_HEPTA_32rule0_eval_expression(context) {
    // TAXA = 'HEPTA' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HEPTA') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'HEPTA') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_HEPTA_32rule1_eval_expression(context) {
    // TAXA = 'HEPTA' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HEPTA') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'HEPTA') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_HEPTA_32rule2_eval_expression(context) {
    // TAXA = 'HEPTA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'HEPTA');
    } else {
        return (feature['TAXA']  == 'HEPTA');
    }
}


function exp_EPHE_33rule0_eval_expression(context) {
    // TAXA = 'EPHE' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'EPHE') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'EPHE') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_EPHE_33rule1_eval_expression(context) {
    // TAXA = 'EPHE' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'EPHE') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'EPHE') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_EPHE_33rule2_eval_expression(context) {
    // TAXA = 'EPHE'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'EPHE');
    } else {
        return (feature['TAXA']  == 'EPHE');
    }
}


function exp_BAET_34rule0_eval_expression(context) {
    // TAXA = 'BAET' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'BAET') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'BAET') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_BAET_34rule1_eval_expression(context) {
    // TAXA = 'BAET' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'BAET') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'BAET') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_BAET_34rule2_eval_expression(context) {
    // TAXA = 'BAET'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'BAET');
    } else {
        return (feature['TAXA']  == 'BAET');
    }
}


function exp_TIPU_35rule0_eval_expression(context) {
    // TAXA = 'TIPU' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'TIPU') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'TIPU') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_TIPU_35rule1_eval_expression(context) {
    // TAXA = 'TIPU' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'TIPU') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'TIPU') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_TIPU_35rule2_eval_expression(context) {
    // TAXA = 'TIPU'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'TIPU');
    } else {
        return (feature['TAXA']  == 'TIPU');
    }
}


function exp_TABA_36rule0_eval_expression(context) {
    // TAXA = 'TABA' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'TABA') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'TABA') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_TABA_36rule1_eval_expression(context) {
    // TAXA = 'TABA' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'TABA') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'TABA') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_TABA_36rule2_eval_expression(context) {
    // TAXA = 'TABA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'TABA');
    } else {
        return (feature['TAXA']  == 'TABA');
    }
}


function exp_SIMU_37rule0_eval_expression(context) {
    // TAXA = 'SIMU' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'SIMU') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'SIMU') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_SIMU_37rule1_eval_expression(context) {
    // TAXA = 'SIMU' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'SIMU') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'SIMU') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_SIMU_37rule2_eval_expression(context) {
    // TAXA = 'SIMU'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'SIMU');
    } else {
        return (feature['TAXA']  == 'SIMU');
    }
}


function exp_RHAG_38rule0_eval_expression(context) {
    // TAXA = 'RHAG' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'RHAG') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'RHAG') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_RHAG_38rule1_eval_expression(context) {
    // TAXA = 'RHAG' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'RHAG') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'RHAG') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_RHAG_38rule2_eval_expression(context) {
    // TAXA = 'RHAG'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'RHAG');
    } else {
        return (feature['TAXA']  == 'RHAG');
    }
}


function exp_PTYC_39rule0_eval_expression(context) {
    // TAXA = 'PTYC' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PTYC') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'PTYC') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_PTYC_39rule1_eval_expression(context) {
    // TAXA = 'PTYC' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PTYC') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'PTYC') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_PTYC_39rule2_eval_expression(context) {
    // TAXA = 'PTYC'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'PTYC');
    } else {
        return (feature['TAXA']  == 'PTYC');
    }
}


function exp_PEDI_40rule0_eval_expression(context) {
    // TAXA = 'PEDI' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PEDI') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'PEDI') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_PEDI_40rule1_eval_expression(context) {
    // TAXA = 'PEDI' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PEDI') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'PEDI') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_PEDI_40rule2_eval_expression(context) {
    // TAXA = 'PEDI'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'PEDI');
    } else {
        return (feature['TAXA']  == 'PEDI');
    }
}


function exp_LIMO_41rule0_eval_expression(context) {
    // TAXA = 'LIMO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'LIMO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'LIMO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_LIMO_41rule1_eval_expression(context) {
    // TAXA = 'LIMO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'LIMO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'LIMO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_LIMO_41rule2_eval_expression(context) {
    // TAXA = 'LIMO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'LIMO');
    } else {
        return (feature['TAXA']  == 'LIMO');
    }
}


function exp_EMPI_42rule0_eval_expression(context) {
    // TAXA = 'EMPI' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'EMPI') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'EMPI') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_EMPI_42rule1_eval_expression(context) {
    // TAXA = 'EMPI' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'EMPI') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'EMPI') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_EMPI_42rule2_eval_expression(context) {
    // TAXA = 'EMPI'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'EMPI');
    } else {
        return (feature['TAXA']  == 'EMPI');
    }
}


function exp_DIXI_43rule0_eval_expression(context) {
    // TAXA = 'DIXI' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'DIXI') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'DIXI') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_DIXI_43rule1_eval_expression(context) {
    // TAXA = 'DIXI' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'DIXI') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'DIXI') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_DIXI_43rule2_eval_expression(context) {
    // TAXA = 'DIXI'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'DIXI');
    } else {
        return (feature['TAXA']  == 'DIXI');
    }
}


function exp_CHIRO_44rule0_eval_expression(context) {
    // TAXA = 'CHIRO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'CHIRO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'CHIRO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_CHIRO_44rule1_eval_expression(context) {
    // TAXA = 'CHIRO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'CHIRO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'CHIRO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_CHIRO_44rule2_eval_expression(context) {
    // TAXA = 'CHIRO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'CHIRO');
    } else {
        return (feature['TAXA']  == 'CHIRO');
    }
}


function exp_CULI_45rule0_eval_expression(context) {
    // TAXA = 'CULI' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'CULI') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'CULI') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_CULI_45rule1_eval_expression(context) {
    // TAXA = 'CULI' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'CULI') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'CULI') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_CULI_45rule2_eval_expression(context) {
    // TAXA = 'CULI'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'CULI');
    } else {
        return (feature['TAXA']  == 'CULI');
    }
}


function exp_CHAO_46rule0_eval_expression(context) {
    // TAXA = 'CHAO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'CHAO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'CHAO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_CHAO_46rule1_eval_expression(context) {
    // TAXA = 'CHAO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'CHAO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'CHAO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_CHAO_46rule2_eval_expression(context) {
    // TAXA = 'CHAO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'CHAO');
    } else {
        return (feature['TAXA']  == 'CHAO');
    }
}


function exp_CERA_47rule0_eval_expression(context) {
    // TAXA = 'CERA' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'CERA') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'CERA') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_CERA_47rule1_eval_expression(context) {
    // TAXA = 'CERA' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'CERA') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'CERA') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_CERA_47rule2_eval_expression(context) {
    // TAXA = 'CERA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'CERA');
    } else {
        return (feature['TAXA']  == 'CERA');
    }
}


function exp_ANTH_48rule0_eval_expression(context) {
    // TAXA = 'ANTH' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ANTH') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'ANTH') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_ANTH_48rule1_eval_expression(context) {
    // TAXA = 'ANTH' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ANTH') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'ANTH') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_ANTH_48rule2_eval_expression(context) {
    // TAXA = 'ANTH'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'ANTH');
    } else {
        return (feature['TAXA']  == 'ANTH');
    }
}


function exp_CAMBA_49rule0_eval_expression(context) {
    // TAXA = 'CAMBA' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'CAMBA') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'CAMBA') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_CAMBA_49rule1_eval_expression(context) {
    // TAXA = 'CAMBA' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'CAMBA') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'CAMBA') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_CAMBA_49rule2_eval_expression(context) {
    // TAXA = 'CAMBA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'CAMBA');
    } else {
        return (feature['TAXA']  == 'CAMBA');
    }
}


function exp_ASTA_50rule0_eval_expression(context) {
    // TAXA = 'ASTA' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ASTA') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'ASTA') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_ASTA_50rule1_eval_expression(context) {
    // TAXA = 'ASTA' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ASTA') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'ASTA') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_ASTA_50rule2_eval_expression(context) {
    // TAXA = 'ASTA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'ASTA');
    } else {
        return (feature['TAXA']  == 'ASTA');
    }
}


function exp_SCIR_51rule0_eval_expression(context) {
    // TAXA = 'SCIR' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'SCIR') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'SCIR') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_SCIR_51rule1_eval_expression(context) {
    // TAXA = 'SCIR' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'SCIR') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'SCIR') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_SCIR_51rule2_eval_expression(context) {
    // TAXA = 'SCIR'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'SCIR');
    } else {
        return (feature['TAXA']  == 'SCIR');
    }
}


function exp_HYDRAE_52rule0_eval_expression(context) {
    // TAXA = 'HYDRAE' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HYDRAE') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'HYDRAE') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_HYDRAE_52rule1_eval_expression(context) {
    // TAXA = 'HYDRAE' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HYDRAE') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'HYDRAE') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_HYDRAE_52rule2_eval_expression(context) {
    // TAXA = 'HYDRAE'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'HYDRAE');
    } else {
        return (feature['TAXA']  == 'HYDRAE');
    }
}


function exp_DYTI_53rule0_eval_expression(context) {
    // TAXA = 'DYTI' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'DYTI') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'DYTI') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_DYTI_53rule1_eval_expression(context) {
    // TAXA = 'DYTI' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'DYTI') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'DYTI') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_DYTI_53rule2_eval_expression(context) {
    // TAXA = 'DYTI'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'DYTI');
    } else {
        return (feature['TAXA']  == 'DYTI');
    }
}


function exp_ELMI_54rule0_eval_expression(context) {
    // TAXA = 'ELMI' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ELMI') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'ELMI') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_ELMI_54rule1_eval_expression(context) {
    // TAXA = 'ELMI' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ELMI') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'ELMI') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_ELMI_54rule2_eval_expression(context) {
    // TAXA = 'ELMI'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'ELMI');
    } else {
        return (feature['TAXA']  == 'ELMI');
    }
}


function exp_TRICHO_55rule0_eval_expression(context) {
    // TAXA = 'TRICHO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'TRICHO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'TRICHO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_TRICHO_55rule1_eval_expression(context) {
    // TAXA = 'TRICHO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'TRICHO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'TRICHO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_TRICHO_55rule2_eval_expression(context) {
    // TAXA = 'TRICHO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'TRICHO');
    } else {
        return (feature['TAXA']  == 'TRICHO');
    }
}


function exp_PLECO_56rule0_eval_expression(context) {
    // TAXA = 'PLECO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PLECO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'PLECO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_PLECO_56rule1_eval_expression(context) {
    // TAXA = 'PLECO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'PLECO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'PLECO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_PLECO_56rule2_eval_expression(context) {
    // TAXA = 'PLECO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'PLECO');
    } else {
        return (feature['TAXA']  == 'PLECO');
    }
}


function exp_OLIGO_57rule0_eval_expression(context) {
    // TAXA = 'OLIGO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'OLIGO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'OLIGO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_OLIGO_57rule1_eval_expression(context) {
    // TAXA = 'OLIGO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'OLIGO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'OLIGO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_OLIGO_57rule2_eval_expression(context) {
    // TAXA = 'OLIGO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'OLIGO');
    } else {
        return (feature['TAXA']  == 'OLIGO');
    }
}


function exp_ODO_58rule0_eval_expression(context) {
    // TAXA = 'ODO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ODO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'ODO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_ODO_58rule1_eval_expression(context) {
    // TAXA = 'ODO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ODO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'ODO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_ODO_58rule2_eval_expression(context) {
    // TAXA = 'ODO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'ODO');
    } else {
        return (feature['TAXA']  == 'ODO');
    }
}


function exp_NEMATH_59rule0_eval_expression(context) {
    // TAXA = 'NEMATH' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'NEMATH') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'NEMATH') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_NEMATH_59rule1_eval_expression(context) {
    // TAXA = 'NEMATH' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'NEMATH') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'NEMATH') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_NEMATH_59rule2_eval_expression(context) {
    // TAXA = 'NEMATH'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'NEMATH');
    } else {
        return (feature['TAXA']  == 'NEMATH');
    }
}


function exp_ISO_60rule0_eval_expression(context) {
    // TAXA = 'ISO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ISO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'ISO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_ISO_60rule1_eval_expression(context) {
    // TAXA = 'ISO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ISO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'ISO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_ISO_60rule2_eval_expression(context) {
    // TAXA = 'ISO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'ISO');
    } else {
        return (feature['TAXA']  == 'ISO');
    }
}


function exp_HYDRAC_61rule0_eval_expression(context) {
    // TAXA = 'HYDRAC' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HYDRAC') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'HYDRAC') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_HYDRAC_61rule1_eval_expression(context) {
    // TAXA = 'HYDRAC' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HYDRAC') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'HYDRAC') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_HYDRAC_61rule2_eval_expression(context) {
    // TAXA = 'HYDRAC'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'HYDRAC');
    } else {
        return (feature['TAXA']  == 'HYDRAC');
    }
}


function exp_HETERO_62rule0_eval_expression(context) {
    // TAXA = 'HETERO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HETERO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'HETERO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_HETERO_62rule1_eval_expression(context) {
    // TAXA = 'HETERO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'HETERO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'HETERO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_HETERO_62rule2_eval_expression(context) {
    // TAXA = 'HETERO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'HETERO');
    } else {
        return (feature['TAXA']  == 'HETERO');
    }
}


function exp_GAST_63rule0_eval_expression(context) {
    // TAXA = 'GAST' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'GAST') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'GAST') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_GAST_63rule1_eval_expression(context) {
    // TAXA = 'GAST' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'GAST') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'GAST') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_GAST_63rule2_eval_expression(context) {
    // TAXA = 'GAST'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'GAST');
    } else {
        return (feature['TAXA']  == 'GAST');
    }
}


function exp_EPHEME_64rule0_eval_expression(context) {
    // TAXA = 'EPHEME' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'EPHEME') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'EPHEME') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_EPHEME_64rule1_eval_expression(context) {
    // TAXA = 'EPHEME' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'EPHEME') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'EPHEME') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_EPHEME_64rule2_eval_expression(context) {
    // TAXA = 'EPHEME'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'EPHEME');
    } else {
        return (feature['TAXA']  == 'EPHEME');
    }
}


function exp_DIPT_65rule0_eval_expression(context) {
    // TAXA = 'DIPT' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'DIPT') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'DIPT') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_DIPT_65rule1_eval_expression(context) {
    // TAXA = 'DIPT' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'DIPT') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'DIPT') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_DIPT_65rule2_eval_expression(context) {
    // TAXA = 'DIPT'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'DIPT');
    } else {
        return (feature['TAXA']  == 'DIPT');
    }
}


function exp_DECA_66rule0_eval_expression(context) {
    // TAXA = 'DECA' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'DECA') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'DECA') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_DECA_66rule1_eval_expression(context) {
    // TAXA = 'DECA' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'DECA') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'DECA') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_DECA_66rule2_eval_expression(context) {
    // TAXA = 'DECA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'DECA');
    } else {
        return (feature['TAXA']  == 'DECA');
    }
}


function exp_COLEO_67rule0_eval_expression(context) {
    // TAXA = 'COLEO' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'COLEO') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'COLEO') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_COLEO_67rule1_eval_expression(context) {
    // TAXA = 'COLEO' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'COLEO') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'COLEO') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_COLEO_67rule2_eval_expression(context) {
    // TAXA = 'COLEO'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'COLEO');
    } else {
        return (feature['TAXA']  == 'COLEO');
    }
}


function exp_BIVA_68rule0_eval_expression(context) {
    // TAXA = 'BIVA' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'BIVA') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'BIVA') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_BIVA_68rule1_eval_expression(context) {
    // TAXA = 'BIVA' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'BIVA') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'BIVA') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_BIVA_68rule2_eval_expression(context) {
    // TAXA = 'BIVA'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'BIVA');
    } else {
        return (feature['TAXA']  == 'BIVA');
    }
}


function exp_ANNE_69rule0_eval_expression(context) {
    // TAXA = 'ANNE' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ANNE') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'ANNE') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_ANNE_69rule1_eval_expression(context) {
    // TAXA = 'ANNE' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ANNE') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'ANNE') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_ANNE_69rule2_eval_expression(context) {
    // TAXA = 'ANNE'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'ANNE');
    } else {
        return (feature['TAXA']  == 'ANNE');
    }
}


function exp_AMPH_70rule0_eval_expression(context) {
    // TAXA = 'AMPH' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'AMPH') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'AMPH') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_AMPH_70rule1_eval_expression(context) {
    // TAXA = 'AMPH' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'AMPH') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'AMPH') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_AMPH_70rule2_eval_expression(context) {
    // TAXA = 'AMPH'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'AMPH');
    } else {
        return (feature['TAXA']  == 'AMPH');
    }
}


function exp_ACHE_71rule0_eval_expression(context) {
    // TAXA = 'ACHE' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ACHE') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'ACHE') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_ACHE_71rule1_eval_expression(context) {
    // TAXA = 'ACHE' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ACHE') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'ACHE') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_ACHE_71rule2_eval_expression(context) {
    // TAXA = 'ACHE'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'ACHE');
    } else {
        return (feature['TAXA']  == 'ACHE');
    }
}


function exp_ACAN_72rule0_eval_expression(context) {
    // TAXA = 'ACAN' AND OCCURRENCE = 0

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ACAN') && (feature.properties['OCCURRENCE']  == 0));
    } else {
        return ((feature['TAXA']  == 'ACAN') && (feature['OCCURRENCE']  == 0));
    }
}


function exp_ACAN_72rule1_eval_expression(context) {
    // TAXA = 'ACAN' AND OCCURRENCE = 'NA'

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['TAXA']  == 'ACAN') && (feature.properties['OCCURRENCE']  == 'NA'));
    } else {
        return ((feature['TAXA']  == 'ACAN') && (feature['OCCURRENCE']  == 'NA'));
    }
}


function exp_ACAN_72rule2_eval_expression(context) {
    // TAXA = 'ACAN'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['TAXA']  == 'ACAN');
    } else {
        return (feature['TAXA']  == 'ACAN');
    }
}